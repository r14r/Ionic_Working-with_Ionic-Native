import { TestBed } from '@angular/core/testing';

import { AppsflyerService } from './appsflyer.service';

describe('AppsflyerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppsflyerService = TestBed.get(AppsflyerService);
    expect(service).toBeTruthy();
  });
});
