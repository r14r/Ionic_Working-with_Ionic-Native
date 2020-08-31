import { TestBed } from '@angular/core/testing';

import { FirebaseCrashService } from './firebase-crash.service';

describe('FirebaseCrashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseCrashService = TestBed.get(FirebaseCrashService);
    expect(service).toBeTruthy();
  });
});
