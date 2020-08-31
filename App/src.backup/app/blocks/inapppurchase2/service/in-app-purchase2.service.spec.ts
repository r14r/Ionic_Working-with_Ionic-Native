import { TestBed } from '@angular/core/testing';

import { InAppPurchase2Service } from './in-app-purchase2.service';

describe('InAppPurchase2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InAppPurchase2Service = TestBed.get(InAppPurchase2Service);
    expect(service).toBeTruthy();
  });
});
