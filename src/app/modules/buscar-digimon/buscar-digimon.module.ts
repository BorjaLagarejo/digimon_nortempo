import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { BuscarDigimonListaComponent } from './lista/lista.component';
import { BuscarDigimonDetalleComponent } from './detalle/detalle.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

export const buscarDigimonRoute: Route[] = [
    {
        path: '',
        component: BuscarDigimonListaComponent
    },
    {
        path: ':id',
        component: BuscarDigimonDetalleComponent
    }
];

@NgModule({
    declarations: [BuscarDigimonListaComponent, BuscarDigimonDetalleComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(buscarDigimonRoute),
        MatInputModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class BuscarDigimonModule {}
