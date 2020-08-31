import { TestBed } from '@angular/core/testing';

import { FlurryAnalyticsService } from './flurry-analytics.service';

describe('FlurryAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlurryAnalyticsService = TestBed.get(FlurryAnalyticsService);
    expect(service).toBeTruthy();
  });
});
