import { TestBed } from '@angular/core/testing';

import { SpeechKitService } from './speech-kit.service';

describe('SpeechKitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeechKitService = TestBed.get(SpeechKitService);
    expect(service).toBeTruthy();
  });
});
