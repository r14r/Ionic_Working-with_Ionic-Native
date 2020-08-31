import { TestBed } from '@angular/core/testing';

import { UniqueDeviceIDService } from './unique-device-id.service';

describe('UniqueDeviceIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueDeviceIDService = TestBed.get(UniqueDeviceIDService);
    expect(service).toBeTruthy();
  });
});
