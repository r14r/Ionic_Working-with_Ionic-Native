import { TestBed } from '@angular/core/testing';

import { StreamingMediaService } from './streaming-media.service';

describe('StreamingMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreamingMediaService = TestBed.get(StreamingMediaService);
    expect(service).toBeTruthy();
  });
});
