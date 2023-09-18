import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDigimonListaComponent } from './lista.component';

describe('ListaComponent', () => {
  let component: BuscarDigimonListaComponent;
  let fixture: ComponentFixture<BuscarDigimonListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarDigimonListaComponent]
    });
    fixture = TestBed.createComponent(BuscarDigimonListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
