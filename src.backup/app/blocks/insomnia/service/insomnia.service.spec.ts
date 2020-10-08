import { TestBed } from '@angular/core/testing';

import { InsomniaService } from './insomnia.service';

describe('InsomniaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsomniaService = TestBed.get(InsomniaService);
    expect(service).toBeTruthy();
  });
});
