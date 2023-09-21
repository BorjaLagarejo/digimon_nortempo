import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BuscarDigimonDetalleService } from './detalle.service';
import { Subject, takeUntil } from 'rxjs';
import { Digimon } from 'src/app/interfaces/digimon/digimon.interface';

@Component({
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.scss']
})
export class BuscarDigimonDetalleComponent implements OnInit, OnDestroy {
    public drawerMode: 'over' | 'side' = 'side';
    public drawerOpen: boolean = true;

    public outDigimon!: Digimon;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /*
  -------------------------------------------------------------------
      CONSTRUCTOR
  -------------------------------------------------------------------
  */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _buscarDigimonDetalleService: BuscarDigimonDetalleService
    ) {}

    /*
  -------------------------------------------------------------------
      METODOS OnInit & OnDestroy
  -------------------------------------------------------------------
  */

    ngOnInit(): void {
        this._buscarDigimonDetalleService.digimon$.pipe(takeUntil(this._unsubscribeAll)).subscribe((resDigimos) => {
            if (!resDigimos) return false;
            this.outDigimon = resDigimos;

            return true;
        });

        this.onResize();
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    /*
    -------------------------------------------------------------------
        METODOS PUBLICOS
    -------------------------------------------------------------------
    */

    getDescriptions(digimon: Digimon) {
        return digimon.descriptions.find((d) => d.language === 'en_us')?.description ?? '';
    }

    // Utiliza el decorador HostListener para escuchar el evento de cambio de tamaño de la ventana
    @HostListener('window:resize', ['$event'])
    onResize() {
        this.drawerOpen = window.innerWidth > 1200;
    }
}
