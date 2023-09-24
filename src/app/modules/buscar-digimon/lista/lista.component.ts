import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BuscarDigimonListaService } from './lista.service';
import { Subject, debounceTime, forkJoin, map, takeUntil, tap } from 'rxjs';
import { ContentDigimons, Pageable } from 'src/app/interfaces/digimon/digimons.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DigimonApiService } from 'src/app/services/digimons.service';
import { AttributesField } from 'src/app/interfaces/digimon/attributes.interface';
import { LevelsField } from 'src/app/interfaces/digimon/levels.interface';

@Component({
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class BuscarDigimonListaComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    public displayedColumns: string[] = ['id', 'image', 'name'];
    public dataSource: MatTableDataSource<ContentDigimons> = new MatTableDataSource();

    public filtros = new FormGroup({
        name: new FormControl(),
        attribute: new FormControl(),
        level: new FormControl()
    });

    public paginado!: paginado;
    public isLoading: boolean = false;

    public outMetadata!: {
        attributes: AttributesField[];
        levels: LevelsField[];
    };

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /*
    -------------------------------------------------------------------
        CONSTRUCTOR
    -------------------------------------------------------------------
    */
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _digimonApiService: DigimonApiService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _buscarDigimonListaService: BuscarDigimonListaService
    ) {}

    /*
    -------------------------------------------------------------------
        METODOS OnInit & OnDestroy
    -------------------------------------------------------------------
    */

    ngOnInit(): void {
        forkJoin({
            attributes: this._digimonApiService.getAttributes().pipe(map((res) => res.content.fields)),
            levels: this._digimonApiService.getLevels().pipe(map((res) => res.content.fields))
        }).subscribe((resMetadata) => {
            this.outMetadata = resMetadata;
        });

        this._buscarDigimonListaService.digimons$.pipe(takeUntil(this._unsubscribeAll)).subscribe((resDigimons) => {
            if (!resDigimons) return false;

            this.paginado = this.generatePaginado(resDigimons.pageable);

            this.dataSource.data = resDigimons.content;

            this._changeDetectorRef.markForCheck();

            return true;
        });

        this.filtros.valueChanges.pipe(debounceTime(300)).subscribe((res) => {
            // Se reinicia el paginado
            this.paginator.pageIndex = 0;

            this.realizarBusqueda().subscribe();
        });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    /*
    -------------------------------------------------------------------
        METODOS PUBLICOS
    -------------------------------------------------------------------
    */
    public eventPaginator(event: PageEvent) {
        this.realizarBusqueda().subscribe();
    }

    public generatePaginado(pageable: Pageable): paginado {
        return {
            currentPage: pageable.currentPage,
            elementsOnPage: pageable.elementsOnPage,
            totalElements: pageable.totalElements,
            totalPages: pageable.totalPages,
            previousPage: pageable.previousPage,
            nextPage: pageable.nextPage
        };
    }

    public goTo(item: ContentDigimons) {
        this._router.navigate(['./', item.id], { relativeTo: this._activatedRoute });
    }

    private realizarBusqueda() {
        this.isLoading = true;

        const filtroParams: any = {
            page: this.paginator.pageIndex,
            pageSize: this.paginator.pageSize
        };

        if (this.filtros.value.name) {
            filtroParams.name = this.filtros.value.name;
        }

        if (this.filtros.value.attribute) {
            filtroParams.attribute = this.filtros.value.attribute;
        }

        if (this.filtros.value.level) {
            filtroParams.level = this.filtros.value.level;
        }

        return this._buscarDigimonListaService.getDigimons(filtroParams).pipe(tap((res) => (this.isLoading = false)));
    }
}

interface paginado {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    previousPage: string;
    nextPage: string;
}
