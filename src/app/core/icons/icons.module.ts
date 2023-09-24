import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule()
export class IconsModule {
    /**
     * Constructor
     */
    constructor(private _domSanitizer: DomSanitizer, private _matIconRegistry: MatIconRegistry) {
        // Registrar conjuntos de iconos
        this._matIconRegistry.addSvgIconSet(
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-twotone.svg')
        );
        this._matIconRegistry.addSvgIconSetInNamespace(
            'mat_outline',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg')
        );
        this._matIconRegistry.addSvgIconSetInNamespace(
            'mat_solid',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-solid.svg')
        );
    }
}
