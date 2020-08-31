import { TestBed } from '@angular/core/testing';

import { TapticEngineService } from './taptic-engine.service';

describe('TapticEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TapticEngineService = TestBed.get(TapticEngineService);
    expect(service).toBeTruthy();
  });
});
