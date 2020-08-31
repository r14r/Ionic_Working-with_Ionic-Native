import { TestBed } from '@angular/core/testing';

import { MSADALService } from './msadal.service';

describe('MSADALService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MSADALService = TestBed.get(MSADALService);
    expect(service).toBeTruthy();
  });
});
