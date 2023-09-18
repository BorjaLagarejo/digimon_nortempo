import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';

import { BuscarDigimonListaComponent } from './lista/lista.component';
import { BuscarDigimonDetalleComponent } from './detalle/detalle.component';

export const buscarDigimonRoute: Route[] = [
  {
    path: '',
    component: BuscarDigimonListaComponent,
  },
  {
    path: ':id',
    component: BuscarDigimonDetalleComponent,
  },
];

@NgModule({
  declarations: [BuscarDigimonListaComponent, BuscarDigimonDetalleComponent],
  imports: [CommonModule],
})
export class BuscarDigimonModule {}
