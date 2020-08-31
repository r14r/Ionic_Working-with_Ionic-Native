import { TestBed } from '@angular/core/testing';

import { FileOpenerService } from './file-opener.service';

describe('FileOpenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileOpenerService = TestBed.get(FileOpenerService);
    expect(service).toBeTruthy();
  });
});
