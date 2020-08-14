import { TestBed } from '@angular/core/testing';

import { OpenALPRService } from './open-alpr.service';

describe('OpenALPRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenALPRService = TestBed.get(OpenALPRService);
    expect(service).toBeTruthy();
  });
});
