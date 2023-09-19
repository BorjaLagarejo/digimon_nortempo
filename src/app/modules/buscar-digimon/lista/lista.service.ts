import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Digimon } from 'src/app/interfaces/digimon/digimon.interface';
import { DigimonApiService } from 'src/app/services/digimons.service';

@Injectable({
    providedIn: 'root'
})
export class BuscarDigimonListaService {
    private _digimons: BehaviorSubject<any | null> = new BehaviorSubject<Digimon | null>(null);
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
    get digimons$() {
        return this._digimons.asObservable();
    }

    /*
    -------------------------------------------------------------------
        METODOS PUBLICOS
    -------------------------------------------------------------------
    */

    public getDigimons() {
        return this._digimonApiService.getDigimonList().pipe(
            tap((resDigimons) => {
                console.log('🚀 ~ resDigimons', resDigimons);
                this._digimons.next(resDigimons);
            })
        );
    }
}
