import { TestBed } from '@angular/core/testing';

import { SmsRetrieverService } from './sms-retriever.service';

describe('SmsRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmsRetrieverService = TestBed.get(SmsRetrieverService);
    expect(service).toBeTruthy();
  });
});
