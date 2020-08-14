import { TestBed } from '@angular/core/testing';

import { QQSDKService } from './qqsdk.service';

describe('QQSDKService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QQSDKService = TestBed.get(QQSDKService);
    expect(service).toBeTruthy();
  });
});
