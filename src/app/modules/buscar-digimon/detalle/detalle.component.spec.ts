import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDigimonDetalleComponent } from './detalle.component';

describe('DetalleComponent', () => {
  let component: BuscarDigimonDetalleComponent;
  let fixture: ComponentFixture<BuscarDigimonDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarDigimonDetalleComponent]
    });
    fixture = TestBed.createComponent(BuscarDigimonDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
