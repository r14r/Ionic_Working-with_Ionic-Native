import { TestBed } from '@angular/core/testing';

import { AdMobPlusService } from './ad-mob-plus.service';

describe('AdMobPlusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdMobPlusService = TestBed.get(AdMobPlusService);
    expect(service).toBeTruthy();
  });
});
