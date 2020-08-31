import { TestBed } from '@angular/core/testing';

import { DocumentViewerService } from './document-viewer.service';

describe('DocumentViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentViewerService = TestBed.get(DocumentViewerService);
    expect(service).toBeTruthy();
  });
});
