import { TestBed } from '@angular/core/testing';

import { BackgroundModeService } from './background-mode.service';

describe('BackgroundModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackgroundModeService = TestBed.get(BackgroundModeService);
    expect(service).toBeTruthy();
  });
});
