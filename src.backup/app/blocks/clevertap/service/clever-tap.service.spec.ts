import { TestBed } from '@angular/core/testing';

import { CleverTapService } from './clever-tap.service';

describe('CleverTapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CleverTapService = TestBed.get(CleverTapService);
    expect(service).toBeTruthy();
  });
});
