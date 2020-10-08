import { TestBed } from '@angular/core/testing';

import { AppCenterAnalyticsService } from './app-center-analytics.service';

describe('AppCenterAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCenterAnalyticsService = TestBed.get(AppCenterAnalyticsService);
    expect(service).toBeTruthy();
  });
});
