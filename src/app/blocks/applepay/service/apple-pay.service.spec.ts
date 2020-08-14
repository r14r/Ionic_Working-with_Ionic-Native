import { TestBed } from '@angular/core/testing';

import { ApplePayService } from './apple-pay.service';

describe('ApplePayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplePayService = TestBed.get(ApplePayService);
    expect(service).toBeTruthy();
  });
});
