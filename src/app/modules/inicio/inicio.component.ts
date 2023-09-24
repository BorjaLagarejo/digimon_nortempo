import { Component, OnDestroy, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';
import { Subject, takeUntil } from 'rxjs';
import { Digimon } from 'src/app/interfaces/digimon/digimon.interface';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
    public digimonRandom: Digimon | any;

    tiempoTotal = 15; // Tiempo total en segundos
    tiempoTranscurrido = 0; // Tiempo transcurrido en segundos
    porcentajeCompletado = 0; // Porcentaje completado

    private intervalo!: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(private _inicioService: InicioService) {}

    ngOnInit(): void {
        this._inicioService.digimonRandom$.pipe(takeUntil(this._unsubscribeAll)).subscribe((resDigimon) => {
            this.digimonRandom = resDigimon;
            this.actualizarBarraDeProgreso();
        });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();

        clearInterval(this.intervalo);
    }

    /**
     * Cada 15 segundos se cambia la tarjeta
     */
    actualizarBarraDeProgreso() {
        this.tiempoTranscurrido = 0; // Tiempo transcurrido en segundos
        this.porcentajeCompletado = 0; // Porcentaje completado

        this.intervalo = setInterval(() => {
            this.tiempoTranscurrido += 0.1; // Actualiza cada 100 milisegundos (0.1 segundos)
            this.porcentajeCompletado = (this.tiempoTranscurrido / this.tiempoTotal) * 100;

            if (this.tiempoTranscurrido >= this.tiempoTotal) {
                this._inicioService.getRandomDigimon().subscribe();
                // this.actualizarBarraDeProgreso();
                clearInterval(this.intervalo);
            }
        }, 100); // Actualizar cada segundo
    }
}
