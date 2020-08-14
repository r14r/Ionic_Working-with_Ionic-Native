import { TestBed } from '@angular/core/testing';

import { StarPRNTService } from './star-prnt.service';

describe('StarPRNTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarPRNTService = TestBed.get(StarPRNTService);
    expect(service).toBeTruthy();
  });
});
