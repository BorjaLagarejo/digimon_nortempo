import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { BuscarDigimonListaService } from './lista.service';
import { Subject, debounceTime, map, merge, of, startWith, switchMap, takeUntil } from 'rxjs';
import { ContentDigimons, Pageable } from 'src/app/interfaces/digimon/digimons.interface';
import { HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class BuscarDigimonListaComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    public displayedColumns: string[] = ['id', 'image', 'name'];
    public dataSource: MatTableDataSource<ContentDigimons> = new MatTableDataSource();

    public buscador = new FormControl('');

    public paginado!: paginado;
    public isLoading: boolean = false;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /*
    -------------------------------------------------------------------
        CONSTRUCTOR
    -------------------------------------------------------------------
    */
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _buscarDigimonListaService: BuscarDigimonListaService
    ) {}

    /*
    -------------------------------------------------------------------
        METODOS OnInit & OnDestroy
    -------------------------------------------------------------------
    */

    ngOnInit(): void {
        this._buscarDigimonListaService.digimons$.pipe(takeUntil(this._unsubscribeAll)).subscribe((resDigimons) => {
            console.log('🚀 ~ resDigimons', resDigimons);

            if (!resDigimons) return false;

            this.paginado = this.generatePaginado(resDigimons.pageable);

            this.dataSource.data = resDigimons.content;

            this._changeDetectorRef.markForCheck();

            return true;
        });

        this.buscador.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                switchMap((query) => {
                    this.isLoading = true;
                    return this._buscarDigimonListaService.getDigimons({
                        page: 0,
                        pageSize: this.paginator.pageSize,
                        name: this.buscador.value ?? ''
                    });
                }),
                map(() => {
                    this.isLoading = false;
                })
            )
            .subscribe();
    }

    ngAfterViewInit() {
        if (this.paginator) {
            merge(this.paginator.page)
                .pipe(
                    startWith({}),
                    switchMap(() => {
                        this.isLoading = true;

                        this.buscador.reset('', { emitEvent: false });

                        return this._buscarDigimonListaService.getDigimons({
                            page: this.paginator.pageIndex,
                            pageSize: this.paginator.pageSize
                        });
                    }),
                    map(() => {
                        this.isLoading = false;
                    })
                )
                .subscribe();
        }
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
    public applyFilter(event: any) {
        console.log('🚀 ~ event', event);
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
}

interface paginado {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    previousPage: string;
    nextPage: string;
}
