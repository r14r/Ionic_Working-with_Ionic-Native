import { TestBed } from '@angular/core/testing';

import { BranchIoService } from './branch-io.service';

describe('BranchIoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchIoService = TestBed.get(BranchIoService);
    expect(service).toBeTruthy();
  });
});
