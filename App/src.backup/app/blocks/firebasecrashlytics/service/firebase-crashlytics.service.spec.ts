import { TestBed } from '@angular/core/testing';

import { FirebaseCrashlyticsService } from './firebase-crashlytics.service';

describe('FirebaseCrashlyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseCrashlyticsService = TestBed.get(FirebaseCrashlyticsService);
    expect(service).toBeTruthy();
  });
});
