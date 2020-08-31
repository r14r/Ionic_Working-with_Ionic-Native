import { TestBed } from '@angular/core/testing';

import { BackgroundFetchService } from './background-fetch.service';

describe('BackgroundFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackgroundFetchService = TestBed.get(BackgroundFetchService);
    expect(service).toBeTruthy();
  });
});
