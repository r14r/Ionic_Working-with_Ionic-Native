import { TestBed } from '@angular/core/testing';

import { MobileAccessibilityService } from './mobile-accessibility.service';

describe('MobileAccessibilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileAccessibilityService = TestBed.get(MobileAccessibilityService);
    expect(service).toBeTruthy();
  });
});
