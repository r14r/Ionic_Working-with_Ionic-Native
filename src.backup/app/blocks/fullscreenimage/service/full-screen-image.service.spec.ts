import { TestBed } from '@angular/core/testing';

import { FullScreenImageService } from './full-screen-image.service';

describe('FullScreenImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullScreenImageService = TestBed.get(FullScreenImageService);
    expect(service).toBeTruthy();
  });
});
