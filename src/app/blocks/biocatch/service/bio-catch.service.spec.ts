import { TestBed } from '@angular/core/testing';

import { BioCatchService } from './bio-catch.service';

describe('BioCatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BioCatchService = TestBed.get(BioCatchService);
    expect(service).toBeTruthy();
  });
});
