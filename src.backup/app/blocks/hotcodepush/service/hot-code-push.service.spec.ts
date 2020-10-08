import { TestBed } from '@angular/core/testing';

import { HotCodePushService } from './hot-code-push.service';

describe('HotCodePushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotCodePushService = TestBed.get(HotCodePushService);
    expect(service).toBeTruthy();
  });
});
