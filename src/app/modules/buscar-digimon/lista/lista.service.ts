import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Digimons } from 'src/app/interfaces/digimon/digimons.interface';
import { DigimonApiService, paramsFilterDigimons } from 'src/app/services/digimons.service';

@Injectable({
    providedIn: 'root'
})
export class BuscarDigimonListaService {
    private _digimons: BehaviorSubject<Digimons | null> = new BehaviorSubject<Digimons | null>(null);
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

    public getDigimons(filtros?: paramsFilterDigimons) {
        let params = new HttpParams();

        let filtrosFin = {
            ...{
                page: 0,
                pageSize: 10
            },
            ...filtros
        };

        Object.entries(filtrosFin).forEach(([key, value]) => {
            params = params.set(key, value);
        });

        return this._digimonApiService.getDigimonList(params).pipe(
            tap((resDigimons) => {
                this._digimons.next(resDigimons);
            })
        );
    }
}
