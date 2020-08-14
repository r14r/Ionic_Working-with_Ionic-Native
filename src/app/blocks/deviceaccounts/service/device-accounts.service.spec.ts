import { TestBed } from '@angular/core/testing';

import { DeviceAccountsService } from './device-accounts.service';

describe('DeviceAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceAccountsService = TestBed.get(DeviceAccountsService);
    expect(service).toBeTruthy();
  });
});
