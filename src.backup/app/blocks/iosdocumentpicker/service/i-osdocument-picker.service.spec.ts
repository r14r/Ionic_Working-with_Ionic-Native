import { TestBed } from '@angular/core/testing';

import { IOSDocumentPickerService } from './i-osdocument-picker.service';

describe('IOSDocumentPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IOSDocumentPickerService = TestBed.get(IOSDocumentPickerService);
    expect(service).toBeTruthy();
  });
});
