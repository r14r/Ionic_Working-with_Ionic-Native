import { TestBed } from '@angular/core/testing';

import { LaunchReviewService } from './launch-review.service';

describe('LaunchReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchReviewService = TestBed.get(LaunchReviewService);
    expect(service).toBeTruthy();
  });
});
