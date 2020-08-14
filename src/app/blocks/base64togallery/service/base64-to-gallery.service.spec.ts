import { TestBed } from '@angular/core/testing';

import { Base64ToGalleryService } from './base64-to-gallery.service';

describe('Base64ToGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Base64ToGalleryService = TestBed.get(Base64ToGalleryService);
    expect(service).toBeTruthy();
  });
});
