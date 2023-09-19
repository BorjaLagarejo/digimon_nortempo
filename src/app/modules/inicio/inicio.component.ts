import { Component, OnDestroy, OnInit } from '@angular/core';
import { InicioService } from './service/inicio.service';
import { Subject, takeUntil } from 'rxjs';
import { Digimon } from 'src/app/interfaces/digimon/digimon.interface';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
    public digimonRandom: Digimon | any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(private _inicioService: InicioService) {}

    ngOnInit(): void {
        // Cada 15 se cambia el digimon de forma random
        setInterval(() => {
            this._inicioService.getRandomDigimon().subscribe();
        }, 15000);

        this._inicioService.digimonRandom$.pipe(takeUntil(this._unsubscribeAll)).subscribe((resDigimon) => {
            this.digimonRandom = resDigimon;
        });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
