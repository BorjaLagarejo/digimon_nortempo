import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDigimonComponent } from './tarjeta-digimon.component';

describe('TarjetaDigimonComponent', () => {
  let component: TarjetaDigimonComponent;
  let fixture: ComponentFixture<TarjetaDigimonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaDigimonComponent]
    });
    fixture = TestBed.createComponent(TarjetaDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
