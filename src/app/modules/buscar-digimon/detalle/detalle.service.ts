import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Digimon } from 'src/app/interfaces/digimon/digimon.interface';
import { DigimonApiService } from 'src/app/services/digimons.service';

@Injectable({
    providedIn: 'root'
})
export class BuscarDigimonDetalleService {
    private _digimon: BehaviorSubject<Digimon | null> = new BehaviorSubject<Digimon | null>(null);
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
    get digimon$() {
        return this._digimon.asObservable();
    }

    /*
  -------------------------------------------------------------------
      METODOS PUBLICOS
  -------------------------------------------------------------------
  */

    public getDigimon(id: number) {
        return this._digimonApiService.getDigimon(id).pipe(
            tap((resDigimon) => {
                console.log('🚀 ~ resDigimon', resDigimon);
                this._digimon.next(resDigimon);
            })
        );
    }
}
