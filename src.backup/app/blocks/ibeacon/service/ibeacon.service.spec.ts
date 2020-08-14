import { TestBed } from '@angular/core/testing';

import { IBeaconService } from './ibeacon.service';

describe('IBeaconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IBeaconService = TestBed.get(IBeaconService);
    expect(service).toBeTruthy();
  });
});
