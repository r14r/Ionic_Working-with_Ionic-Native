import { TestBed } from '@angular/core/testing';

import { DBMeterService } from './dbmeter.service';

describe('DBMeterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBMeterService = TestBed.get(DBMeterService);
    expect(service).toBeTruthy();
  });
});
