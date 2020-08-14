import { TestBed } from '@angular/core/testing';

import { ZBarService } from './zbar.service';

describe('ZBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZBarService = TestBed.get(ZBarService);
    expect(service).toBeTruthy();
  });
});
