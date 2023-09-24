import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { InicioService } from './inicio.service';
import { Digimon } from 'src/app/interfaces/digimon/digimon.interface';

export const inicioResolver: ResolveFn<Digimon> = (route, state) => {
    return inject(InicioService).getRandomDigimon();
};
