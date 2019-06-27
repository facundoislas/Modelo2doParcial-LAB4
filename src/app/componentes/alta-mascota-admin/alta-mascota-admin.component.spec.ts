import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMascotaAdminComponent } from './alta-mascota-admin.component';

describe('AltaMascotaAdminComponent', () => {
  let component: AltaMascotaAdminComponent;
  let fixture: ComponentFixture<AltaMascotaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMascotaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMascotaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
