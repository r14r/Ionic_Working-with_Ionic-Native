import { TestBed } from '@angular/core/testing';

import { GooglePlusService } from './google-plus.service';

describe('GooglePlusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglePlusService = TestBed.get(GooglePlusService);
    expect(service).toBeTruthy();
  });
});
