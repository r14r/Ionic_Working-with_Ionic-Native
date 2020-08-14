import { TestBed } from '@angular/core/testing';

import { RegulaDocumentReaderService } from './regula-document-reader.service';

describe('RegulaDocumentReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegulaDocumentReaderService = TestBed.get(RegulaDocumentReaderService);
    expect(service).toBeTruthy();
  });
});
