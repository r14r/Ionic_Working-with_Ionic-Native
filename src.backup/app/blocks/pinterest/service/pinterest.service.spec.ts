import { TestBed } from '@angular/core/testing';

import { PinterestService } from './pinterest.service';

describe('PinterestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinterestService = TestBed.get(PinterestService);
    expect(service).toBeTruthy();
  });
});
