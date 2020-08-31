import { TestBed } from '@angular/core/testing';

import { HeaderColorService } from './header-color.service';

describe('HeaderColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderColorService = TestBed.get(HeaderColorService);
    expect(service).toBeTruthy();
  });
});
