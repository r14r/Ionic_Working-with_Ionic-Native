import { TestBed } from '@angular/core/testing';

import { MusicControlsService } from './music-controls.service';

describe('MusicControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicControlsService = TestBed.get(MusicControlsService);
    expect(service).toBeTruthy();
  });
});
