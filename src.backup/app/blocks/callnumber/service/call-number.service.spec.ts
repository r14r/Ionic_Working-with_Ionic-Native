import { TestBed } from '@angular/core/testing';

import { CallNumberService } from './call-number.service';

describe('CallNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallNumberService = TestBed.get(CallNumberService);
    expect(service).toBeTruthy();
  });
});
