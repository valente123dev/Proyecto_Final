import { TestBed } from '@angular/core/testing';

import { HttpInventarioService } from './http-inventario.service';

describe('HttpInventarioService', () => {
  let service: HttpInventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
