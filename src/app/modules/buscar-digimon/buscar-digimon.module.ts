import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BuscarDigimonListaComponent } from './lista/lista.component';
import { BuscarDigimonDetalleComponent } from './detalle/detalle.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

import { buscarDigimonListaResolver } from './lista/lista.resolver';
import { detalleResolver as buscarDigimonDetalleResolver } from './detalle/detalle.resolver';

export const buscarDigimonRoute: Route[] = [
    {
        path: '',
        component: BuscarDigimonListaComponent,
        resolve: {
            lista: buscarDigimonListaResolver
        }
    },
    {
        path: ':id',
        component: BuscarDigimonDetalleComponent,
        resolve: {
            detalle: buscarDigimonDetalleResolver
        }
    }
];

@NgModule({
    declarations: [BuscarDigimonListaComponent, BuscarDigimonDetalleComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(buscarDigimonRoute),

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatTooltipModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatProgressBarModule
    ]
})
export class BuscarDigimonModule {}
