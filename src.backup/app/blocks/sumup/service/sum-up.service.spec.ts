import { TestBed } from '@angular/core/testing';

import { SumUpService } from './sum-up.service';

describe('SumUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumUpService = TestBed.get(SumUpService);
    expect(service).toBeTruthy();
  });
});
