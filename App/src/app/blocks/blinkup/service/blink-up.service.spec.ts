import { TestBed } from '@angular/core/testing';

import { BlinkUpService } from './blink-up.service';

describe('BlinkUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlinkUpService = TestBed.get(BlinkUpService);
    expect(service).toBeTruthy();
  });
});
