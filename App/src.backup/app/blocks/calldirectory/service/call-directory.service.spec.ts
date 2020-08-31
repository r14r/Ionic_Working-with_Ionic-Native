import { TestBed } from '@angular/core/testing';

import { CallDirectoryService } from './call-directory.service';

describe('CallDirectoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallDirectoryService = TestBed.get(CallDirectoryService);
    expect(service).toBeTruthy();
  });
});
