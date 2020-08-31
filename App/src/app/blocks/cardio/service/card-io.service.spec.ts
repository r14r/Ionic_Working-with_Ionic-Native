import { TestBed } from '@angular/core/testing';

import { CardIOService } from './card-io.service';

describe('CardIOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardIOService = TestBed.get(CardIOService);
    expect(service).toBeTruthy();
  });
});
