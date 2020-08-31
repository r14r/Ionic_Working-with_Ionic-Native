import { TestBed } from '@angular/core/testing';

import { NativeGeocoderService } from './native-geocoder.service';

describe('NativeGeocoderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NativeGeocoderService = TestBed.get(NativeGeocoderService);
    expect(service).toBeTruthy();
  });
});
