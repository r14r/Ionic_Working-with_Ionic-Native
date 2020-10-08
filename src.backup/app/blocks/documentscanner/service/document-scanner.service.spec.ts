import { TestBed } from '@angular/core/testing';

import { DocumentScannerService } from './document-scanner.service';

describe('DocumentScannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentScannerService = TestBed.get(DocumentScannerService);
    expect(service).toBeTruthy();
  });
});
