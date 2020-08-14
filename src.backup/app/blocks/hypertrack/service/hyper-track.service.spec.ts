import { TestBed } from '@angular/core/testing';

import { HyperTrackService } from './hyper-track.service';

describe('HyperTrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HyperTrackService = TestBed.get(HyperTrackService);
    expect(service).toBeTruthy();
  });
});
