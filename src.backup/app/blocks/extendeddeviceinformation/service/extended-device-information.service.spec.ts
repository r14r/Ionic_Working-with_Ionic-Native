import { TestBed } from '@angular/core/testing';

import { ExtendedDeviceInformationService } from './extended-device-information.service';

describe('ExtendedDeviceInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtendedDeviceInformationService = TestBed.get(ExtendedDeviceInformationService);
    expect(service).toBeTruthy();
  });
});
