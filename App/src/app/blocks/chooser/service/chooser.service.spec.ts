import { TestBed } from '@angular/core/testing';

import { ChooserService } from './chooser.service';

describe('ChooserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChooserService = TestBed.get(ChooserService);
    expect(service).toBeTruthy();
  });
});
