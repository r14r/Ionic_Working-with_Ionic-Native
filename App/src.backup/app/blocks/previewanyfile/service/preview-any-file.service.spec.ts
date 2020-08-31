import { TestBed } from '@angular/core/testing';

import { PreviewAnyFileService } from './preview-any-file.service';

describe('PreviewAnyFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreviewAnyFileService = TestBed.get(PreviewAnyFileService);
    expect(service).toBeTruthy();
  });
});
