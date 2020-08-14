import { TestBed } from '@angular/core/testing';

import { CallLogService } from './call-log.service';

describe('CallLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallLogService = TestBed.get(CallLogService);
    expect(service).toBeTruthy();
  });
});
