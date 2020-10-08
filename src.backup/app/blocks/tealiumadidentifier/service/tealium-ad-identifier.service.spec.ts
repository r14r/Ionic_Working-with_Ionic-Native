import { TestBed } from '@angular/core/testing';

import { TealiumAdIdentifierService } from './tealium-ad-identifier.service';

describe('TealiumAdIdentifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TealiumAdIdentifierService = TestBed.get(TealiumAdIdentifierService);
    expect(service).toBeTruthy();
  });
});
