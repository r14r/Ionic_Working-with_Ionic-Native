import { TestBed } from '@angular/core/testing';

import { IOSFilePickerService } from './i-osfile-picker.service';

describe('IOSFilePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IOSFilePickerService = TestBed.get(IOSFilePickerService);
    expect(service).toBeTruthy();
  });
});
