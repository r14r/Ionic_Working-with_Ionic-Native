import { TestBed } from '@angular/core/testing';

import { PhotoViewerService } from './photo-viewer.service';

describe('PhotoViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoViewerService = TestBed.get(PhotoViewerService);
    expect(service).toBeTruthy();
  });
});
