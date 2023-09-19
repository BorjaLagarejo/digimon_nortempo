import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Digimon } from 'src/app/interfaces/digimon/digimon.interface';
import { DigimonApiService } from 'src/app/services/digimons.service';

@Injectable({
    providedIn: 'root'
})
export class InicioService {
    private _digimonRandom: BehaviorSubject<Digimon | null> = new BehaviorSubject<Digimon | null>(null);

    /*
    -------------------------------------------------------------------
        CONSTRUCTOR
    -------------------------------------------------------------------
    */
    constructor(private _digimonApiService: DigimonApiService) {}

    /*
    -------------------------------------------------------------------
        GET
    -------------------------------------------------------------------
    */
    get digimonRandom$() {
        return this._digimonRandom.asObservable();
    }

    /*
    -------------------------------------------------------------------
        METODOS PUBLICOS
    -------------------------------------------------------------------
    */
    public getRandomDigimon() {
        const idRandom = this.generarIdDigimonRandom();

        return this._digimonApiService.getDigimon(idRandom).pipe(
            tap((resDigimon) => {
                this._digimonRandom.next(resDigimon);
            })
        );
    }

    public generarIdDigimonRandom(): number {
        // Genera un número aleatorio entre 0 (inclusive) y 1 (exclusive)
        const random = Math.random();

        // Multiplica el número aleatorio por 1422 y suma 1 para obtener un valor entre 1 y 1422
        const numeroAleatorio = Math.floor(random * 1422) + 1;

        return numeroAleatorio;
    }
}
