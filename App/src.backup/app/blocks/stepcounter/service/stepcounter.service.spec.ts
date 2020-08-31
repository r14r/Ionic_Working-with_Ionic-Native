import { TestBed } from '@angular/core/testing';

import { StepcounterService } from './stepcounter.service';

describe('StepcounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepcounterService = TestBed.get(StepcounterService);
    expect(service).toBeTruthy();
  });
});
