import { TestBed } from '@angular/core/testing';

import { AndroidExoPlayerService } from './android-exo-player.service';

describe('AndroidExoPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AndroidExoPlayerService = TestBed.get(AndroidExoPlayerService);
    expect(service).toBeTruthy();
  });
});
