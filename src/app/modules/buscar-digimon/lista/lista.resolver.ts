import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BuscarDigimonListaService } from './lista.service';

export const buscarDigimonListaResolver: ResolveFn<any> = (route, state) => {
    console.log('🚀 ~ route', route);
    const queryParam = route.queryParams;

    return inject(BuscarDigimonListaService).getDigimons(queryParam);
};
