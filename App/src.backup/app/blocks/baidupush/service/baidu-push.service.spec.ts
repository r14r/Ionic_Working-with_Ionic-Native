import { TestBed } from '@angular/core/testing';

import { BaiduPushService } from './baidu-push.service';

describe('BaiduPushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaiduPushService = TestBed.get(BaiduPushService);
    expect(service).toBeTruthy();
  });
});
