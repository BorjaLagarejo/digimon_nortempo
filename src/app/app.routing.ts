import { Route } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

export const appRoutes: Route[] = [
    // Redirigir ruta vacía a '/inicio'
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    {
        path: '',
        children: [
            {
                path: 'inicio',
                loadChildren: () => import('./modules/inicio/inicio.module').then((m) => m.InicioModule)
            },
            {
                path: '',
                component: NavigationComponent,
                children: [
                    {
                        path: 'digimons',
                        loadChildren: () =>
                            import('./modules/buscar-digimon/buscar-digimon.module').then((m) => m.BuscarDigimonModule)
                    },
                    {
                        path: 'ayuda',
                        loadChildren: () => import('./modules/ayuda/ayuda.module').then((m) => m.AyudaModule)
                    }
                ]
            }
        ]
    }
];
