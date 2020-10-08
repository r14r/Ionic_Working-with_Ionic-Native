import { TestBed } from '@angular/core/testing';

import { AdMobProService } from './ad-mob-pro.service';

describe('AdMobProService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdMobProService = TestBed.get(AdMobProService);
    expect(service).toBeTruthy();
  });
});
