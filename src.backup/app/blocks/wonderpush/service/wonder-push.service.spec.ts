import { TestBed } from '@angular/core/testing';

import { WonderPushService } from './wonder-push.service';

describe('WonderPushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WonderPushService = TestBed.get(WonderPushService);
    expect(service).toBeTruthy();
  });
});
