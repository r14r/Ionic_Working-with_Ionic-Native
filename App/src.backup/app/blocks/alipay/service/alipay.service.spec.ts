import { TestBed } from '@angular/core/testing';

import { AlipayService } from './alipay.service';

describe('AlipayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlipayService = TestBed.get(AlipayService);
    expect(service).toBeTruthy();
  });
});
