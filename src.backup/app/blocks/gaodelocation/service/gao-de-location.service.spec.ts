import { TestBed } from '@angular/core/testing';

import { GaoDeLocationService } from './gao-de-location.service';

describe('GaoDeLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaoDeLocationService = TestBed.get(GaoDeLocationService);
    expect(service).toBeTruthy();
  });
});
