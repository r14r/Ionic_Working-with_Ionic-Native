import { TestBed } from '@angular/core/testing';

import { AndroidFingerprintAuthService } from './android-fingerprint-auth.service';

describe('AndroidFingerprintAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AndroidFingerprintAuthService = TestBed.get(AndroidFingerprintAuthService);
    expect(service).toBeTruthy();
  });
});
