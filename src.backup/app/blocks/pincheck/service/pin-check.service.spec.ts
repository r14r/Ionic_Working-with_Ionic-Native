import { TestBed } from '@angular/core/testing';

import { PinCheckService } from './pin-check.service';

describe('PinCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinCheckService = TestBed.get(PinCheckService);
    expect(service).toBeTruthy();
  });
});
