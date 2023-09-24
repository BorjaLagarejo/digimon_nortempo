import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    public menu = [
        {
            titulo: 'Inicio',
            path: '/inicio'
        },
        {
            titulo: 'Digimons',
            path: '/digimons'
        },
        {
            titulo: 'Ayuda',
            path: '/ayuda'
        }
    ];

    constructor() {}
}
