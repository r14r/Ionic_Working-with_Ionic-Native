import { TestBed } from '@angular/core/testing';

import { HceService } from './hce.service';

describe('HceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HceService = TestBed.get(HceService);
    expect(service).toBeTruthy();
  });
});
