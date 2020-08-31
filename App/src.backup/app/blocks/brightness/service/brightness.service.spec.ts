import { TestBed } from '@angular/core/testing';

import { BrightnessService } from './brightness.service';

describe('BrightnessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrightnessService = TestBed.get(BrightnessService);
    expect(service).toBeTruthy();
  });
});
