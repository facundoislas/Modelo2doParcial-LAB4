import { TestBed } from '@angular/core/testing';

import { VerificarJwtService } from './verificar-jwt.service';

describe('VerificarJwtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerificarJwtService = TestBed.get(VerificarJwtService);
    expect(service).toBeTruthy();
  });
});
