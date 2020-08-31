import { TestBed } from '@angular/core/testing';

import { ABBYYRealTimeRecognitionService } from './abbyyreal-time-recognition.service';

describe('ABBYYRealTimeRecognitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ABBYYRealTimeRecognitionService = TestBed.get(ABBYYRealTimeRecognitionService);
    expect(service).toBeTruthy();
  });
});
