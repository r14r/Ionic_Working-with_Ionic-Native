import { TestBed } from '@angular/core/testing';

import { TealiumInstallReferrerService } from './tealium-install-referrer.service';

describe('TealiumInstallReferrerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TealiumInstallReferrerService = TestBed.get(TealiumInstallReferrerService);
    expect(service).toBeTruthy();
  });
});
