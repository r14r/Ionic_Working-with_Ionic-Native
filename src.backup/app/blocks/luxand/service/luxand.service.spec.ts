import { TestBed } from '@angular/core/testing';

import { LuxandService } from './luxand.service';

describe('LuxandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LuxandService = TestBed.get(LuxandService);
    expect(service).toBeTruthy();
  });
});
