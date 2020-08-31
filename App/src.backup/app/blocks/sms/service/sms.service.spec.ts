import { TestBed } from '@angular/core/testing';

import { SMSService } from './sms.service';

describe('SMSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SMSService = TestBed.get(SMSService);
    expect(service).toBeTruthy();
  });
});
