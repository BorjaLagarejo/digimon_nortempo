import { Component, Input } from '@angular/core';
import { Digimon } from 'src/app/interfaces/digimon/digimon.interface';

@Component({
    selector: 'tarjeta-digimon',
    templateUrl: './tarjeta-digimon.component.html'
})
export class TarjetaDigimonComponent {
    @Input() public digimon: Digimon | any;

    constructor() {}

    getLevel(digimon: Digimon) {
        return digimon.levels[0]?.level ?? '??';
    }
    getAttributes(digimon: Digimon) {
        return digimon.attributes[0]?.attribute ?? '??';
    }
    getType(digimon: Digimon) {
        return digimon.types[0]?.type ?? '??';
    }
}
