import { TestBed } from '@angular/core/testing';

import { AppMinimizeService } from './app-minimize.service';

describe('AppMinimizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppMinimizeService = TestBed.get(AppMinimizeService);
    expect(service).toBeTruthy();
  });
});
