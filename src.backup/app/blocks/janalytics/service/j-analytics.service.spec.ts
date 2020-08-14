import { TestBed } from '@angular/core/testing';

import { JAnalyticsService } from './j-analytics.service';

describe('JAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JAnalyticsService = TestBed.get(JAnalyticsService);
    expect(service).toBeTruthy();
  });
});
