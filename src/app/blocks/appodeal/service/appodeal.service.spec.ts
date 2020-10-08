import { TestBed } from '@angular/core/testing';

import { AppodealService } from './appodeal.service';

describe('AppodealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppodealService = TestBed.get(AppodealService);
    expect(service).toBeTruthy();
  });
});
