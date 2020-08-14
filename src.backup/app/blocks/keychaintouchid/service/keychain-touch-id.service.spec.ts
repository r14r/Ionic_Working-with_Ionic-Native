import { TestBed } from '@angular/core/testing';

import { KeychainTouchIdService } from './keychain-touch-id.service';

describe('KeychainTouchIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeychainTouchIdService = TestBed.get(KeychainTouchIdService);
    expect(service).toBeTruthy();
  });
});
