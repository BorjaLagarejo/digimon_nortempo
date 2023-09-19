import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BuscarDigimonListaService } from './lista.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class BuscarDigimonListaComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator) paginator: MatPaginator | any;
    @ViewChild(MatSort) sort: MatSort | any;

    public displayedColumns: string[] = ['id', 'image', 'name'];
    public dataSource: MatTableDataSource<any> = new MatTableDataSource();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /*
    -------------------------------------------------------------------
        CONSTRUCTOR
    -------------------------------------------------------------------
    */
    constructor(private _buscarDigimonListaService: BuscarDigimonListaService) {
        this._buscarDigimonListaService.getDigimons().subscribe();
    }

    /*
    -------------------------------------------------------------------
        METODOS OnInit & OnDestroy
    -------------------------------------------------------------------
    */

    ngOnInit(): void {
        this._buscarDigimonListaService.digimons$.pipe(takeUntil(this._unsubscribeAll)).subscribe((resDigimons) => {
            console.log('🚀 ~ resDigimons', resDigimons);

            if (!resDigimons) return false;

            this.dataSource.data = resDigimons.content;
            return true;
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
    public applyFilter(event: any) {
        console.log('🚀 ~ event', event);
    }
}
