import { TestBed } from '@angular/core/testing';

import { YoutubeVideoPlayerService } from './youtube-video-player.service';

describe('YoutubeVideoPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeVideoPlayerService = TestBed.get(YoutubeVideoPlayerService);
    expect(service).toBeTruthy();
  });
});
