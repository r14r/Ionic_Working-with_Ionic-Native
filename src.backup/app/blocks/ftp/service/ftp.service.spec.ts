import { TestBed } from '@angular/core/testing';

import { FTPService } from './ftp.service';

describe('FTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FTPService = TestBed.get(FTPService);
    expect(service).toBeTruthy();
  });
});
