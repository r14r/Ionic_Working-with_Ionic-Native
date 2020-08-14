import { TestBed } from '@angular/core/testing';

import { IsDebugService } from './is-debug.service';

describe('IsDebugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsDebugService = TestBed.get(IsDebugService);
    expect(service).toBeTruthy();
  });
});
