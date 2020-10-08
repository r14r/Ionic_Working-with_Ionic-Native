import { TestBed } from '@angular/core/testing';

import { LottieSplashScreenService } from './lottie-splash-screen.service';

describe('LottieSplashScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LottieSplashScreenService = TestBed.get(LottieSplashScreenService);
    expect(service).toBeTruthy();
  });
});
