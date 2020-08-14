import { TestBed } from '@angular/core/testing';

import { FilePathService } from './file-path.service';

describe('FilePathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilePathService = TestBed.get(FilePathService);
    expect(service).toBeTruthy();
  });
});
