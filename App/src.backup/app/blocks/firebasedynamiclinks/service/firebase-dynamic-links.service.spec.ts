import { TestBed } from '@angular/core/testing';

import { FirebaseDynamicLinksService } from './firebase-dynamic-links.service';

describe('FirebaseDynamicLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseDynamicLinksService = TestBed.get(FirebaseDynamicLinksService);
    expect(service).toBeTruthy();
  });
});
