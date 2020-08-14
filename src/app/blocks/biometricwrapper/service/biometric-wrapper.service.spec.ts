import { TestBed } from '@angular/core/testing';

import { BiometricWrapperService } from './biometric-wrapper.service';

describe('BiometricWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiometricWrapperService = TestBed.get(BiometricWrapperService);
    expect(service).toBeTruthy();
  });
});
