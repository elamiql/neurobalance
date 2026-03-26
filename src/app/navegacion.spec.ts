import { TestBed } from '@angular/core/testing';

import { Navegacion } from './navegacion';

describe('Navegacion', () => {
  let service: Navegacion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Navegacion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
