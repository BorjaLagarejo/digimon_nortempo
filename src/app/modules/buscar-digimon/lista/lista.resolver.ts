import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BuscarDigimonListaService } from './lista.service';

export const buscarDigimonListaResolver: ResolveFn<any> = (route, state) => {
    return inject(BuscarDigimonListaService).getDigimons();
};
