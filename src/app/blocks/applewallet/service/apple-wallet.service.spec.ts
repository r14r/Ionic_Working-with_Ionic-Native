import { TestBed } from '@angular/core/testing';

import { AppleWalletService } from './apple-wallet.service';

describe('AppleWalletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppleWalletService = TestBed.get(AppleWalletService);
    expect(service).toBeTruthy();
  });
});
