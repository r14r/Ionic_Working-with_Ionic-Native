import { TestBed } from '@angular/core/testing';

import { UnviredCordovaSDKService } from './unvired-cordova-sdk.service';

describe('UnviredCordovaSDKService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnviredCordovaSDKService = TestBed.get(UnviredCordovaSDKService);
    expect(service).toBeTruthy();
  });
});
