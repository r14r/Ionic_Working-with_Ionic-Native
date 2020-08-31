import { TestBed } from '@angular/core/testing';

import { VideoEditorService } from './video-editor.service';

describe('VideoEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoEditorService = TestBed.get(VideoEditorService);
    expect(service).toBeTruthy();
  });
});
