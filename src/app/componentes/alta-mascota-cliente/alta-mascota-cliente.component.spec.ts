import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMascotaClienteComponent } from './alta-mascota-cliente.component';

describe('AltaMascotaClienteComponent', () => {
  let component: AltaMascotaClienteComponent;
  let fixture: ComponentFixture<AltaMascotaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMascotaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMascotaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
