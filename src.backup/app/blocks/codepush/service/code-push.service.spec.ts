import { TestBed } from '@angular/core/testing';

import { CodePushService } from './code-push.service';

describe('CodePushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodePushService = TestBed.get(CodePushService);
    expect(service).toBeTruthy();
  });
});
