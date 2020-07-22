import { TestBed } from '@angular/core/testing';

import { FirmadosService } from './firmados.service';

describe('FirmadosService', () => {
  let service: FirmadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirmadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
