import { NgModule, Optional, SkipSelf } from '@angular/core';
import { IconsModule } from './icons/icons.module';

@NgModule({
    imports: [IconsModule]
})
export class CoreModule {
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
        // No permitir inyecciones múltiples
        if (parentModule) {
            throw new Error('CoreModule ya ha sido cargado. Importe este módulo sólo en el AppModule.');
        }
    }
}
