import { TestBed } from '@angular/core/testing';

import { AppCenterCrashesService } from './app-center-crashes.service';

describe('AppCenterCrashesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCenterCrashesService = TestBed.get(AppCenterCrashesService);
    expect(service).toBeTruthy();
  });
});
