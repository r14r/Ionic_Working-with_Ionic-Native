import { TestBed } from '@angular/core/testing';

import { NativeRingtonesService } from './native-ringtones.service';

describe('NativeRingtonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NativeRingtonesService = TestBed.get(NativeRingtonesService);
    expect(service).toBeTruthy();
  });
});
