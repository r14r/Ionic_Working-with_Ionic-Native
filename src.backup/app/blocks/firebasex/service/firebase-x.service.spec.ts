import { TestBed } from '@angular/core/testing';

import { FirebaseXService } from './firebase-x.service';

describe('FirebaseXService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseXService = TestBed.get(FirebaseXService);
    expect(service).toBeTruthy();
  });
});
