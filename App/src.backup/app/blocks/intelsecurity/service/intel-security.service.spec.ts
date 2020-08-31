import { TestBed } from '@angular/core/testing';

import { IntelSecurityService } from './intel-security.service';

describe('IntelSecurityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntelSecurityService = TestBed.get(IntelSecurityService);
    expect(service).toBeTruthy();
  });
});
