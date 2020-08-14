import { TestBed } from '@angular/core/testing';

import { BlinkIdService } from './blink-id.service';

describe('BlinkIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlinkIdService = TestBed.get(BlinkIdService);
    expect(service).toBeTruthy();
  });
});
