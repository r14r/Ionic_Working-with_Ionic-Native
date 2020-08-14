import { TestBed } from '@angular/core/testing';

import { TwitterConnectService } from './twitter-connect.service';

describe('TwitterConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitterConnectService = TestBed.get(TwitterConnectService);
    expect(service).toBeTruthy();
  });
});
