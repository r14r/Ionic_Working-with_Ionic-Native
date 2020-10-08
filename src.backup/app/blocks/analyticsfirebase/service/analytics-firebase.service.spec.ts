import { TestBed } from '@angular/core/testing';

import { AnalyticsFirebaseService } from './analytics-firebase.service';

describe('AnalyticsFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyticsFirebaseService = TestBed.get(AnalyticsFirebaseService);
    expect(service).toBeTruthy();
  });
});
