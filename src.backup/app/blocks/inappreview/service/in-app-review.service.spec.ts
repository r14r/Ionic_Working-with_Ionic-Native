import { TestBed } from '@angular/core/testing';

import { InAppReviewService } from './in-app-review.service';

describe('InAppReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InAppReviewService = TestBed.get(InAppReviewService);
    expect(service).toBeTruthy();
  });
});
