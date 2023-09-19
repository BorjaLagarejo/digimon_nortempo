import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { Route, RouterModule } from '@angular/router';
import { TarjetaDigimonModule } from 'src/app/components/tarjeta-digimon/tarjeta-digimon.module';
import { inicioResolver } from './inicio.resolver';

export const inicioRoute: Route[] = [
    {
        path: '',
        component: InicioComponent,
        resolve: {
            digimon: inicioResolver
        }
    }
];

@NgModule({
    declarations: [InicioComponent],
    imports: [CommonModule, RouterModule.forChild(inicioRoute), TarjetaDigimonModule]
})
export class InicioModule {}
