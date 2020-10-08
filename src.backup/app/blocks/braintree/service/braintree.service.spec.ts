import { TestBed } from '@angular/core/testing';

import { BraintreeService } from './braintree.service';

describe('BraintreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BraintreeService = TestBed.get(BraintreeService);
    expect(service).toBeTruthy();
  });
});
