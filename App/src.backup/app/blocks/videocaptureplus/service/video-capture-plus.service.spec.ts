import { TestBed } from '@angular/core/testing';

import { VideoCapturePlusService } from './video-capture-plus.service';

describe('VideoCapturePlusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoCapturePlusService = TestBed.get(VideoCapturePlusService);
    expect(service).toBeTruthy();
  });
});
