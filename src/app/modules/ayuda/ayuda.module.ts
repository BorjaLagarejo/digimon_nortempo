import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyudaComponent } from './ayuda.component';

import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

export const ayudaRoute: Route[] = [
    {
        path: '',
        component: AyudaComponent
    }
];

@NgModule({
    declarations: [AyudaComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ayudaRoute),
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
    ]
})
export class AyudaModule {}
