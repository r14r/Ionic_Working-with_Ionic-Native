import { TestBed } from '@angular/core/testing';

import { ForegroundServiceService } from './foreground-service.service';

describe('ForegroundServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForegroundServiceService = TestBed.get(ForegroundServiceService);
    expect(service).toBeTruthy();
  });
});
