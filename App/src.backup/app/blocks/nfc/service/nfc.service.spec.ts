import { TestBed } from '@angular/core/testing';

import { NFCService } from './nfc.service';

describe('NFCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NFCService = TestBed.get(NFCService);
    expect(service).toBeTruthy();
  });
});
