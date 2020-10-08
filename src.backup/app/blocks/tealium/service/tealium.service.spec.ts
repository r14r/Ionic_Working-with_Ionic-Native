import { TestBed } from '@angular/core/testing';

import { TealiumService } from './tealium.service';

describe('TealiumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TealiumService = TestBed.get(TealiumService);
    expect(service).toBeTruthy();
  });
});
