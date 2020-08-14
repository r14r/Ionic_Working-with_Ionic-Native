import { TestBed } from '@angular/core/testing';

import { AppCenterPushService } from './app-center-push.service';

describe('AppCenterPushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCenterPushService = TestBed.get(AppCenterPushService);
    expect(service).toBeTruthy();
  });
});
