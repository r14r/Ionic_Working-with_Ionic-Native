import { TestBed } from '@angular/core/testing';

import { DeviceFeedbackService } from './device-feedback.service';

describe('DeviceFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceFeedbackService = TestBed.get(DeviceFeedbackService);
    expect(service).toBeTruthy();
  });
});
