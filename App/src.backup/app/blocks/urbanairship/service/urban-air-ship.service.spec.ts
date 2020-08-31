import { TestBed } from '@angular/core/testing';

import { UrbanAirShipService } from './urban-air-ship.service';

describe('UrbanAirShipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrbanAirShipService = TestBed.get(UrbanAirShipService);
    expect(service).toBeTruthy();
  });
});
