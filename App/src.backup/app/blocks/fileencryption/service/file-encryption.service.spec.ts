import { TestBed } from '@angular/core/testing';

import { FileEncryptionService } from './file-encryption.service';

describe('FileEncryptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileEncryptionService = TestBed.get(FileEncryptionService);
    expect(service).toBeTruthy();
  });
});
