import { TestBed } from '@angular/core/testing';

import { MediaCaptureService } from './media-capture.service';

describe('MediaCaptureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaCaptureService = TestBed.get(MediaCaptureService);
    expect(service).toBeTruthy();
  });
});
