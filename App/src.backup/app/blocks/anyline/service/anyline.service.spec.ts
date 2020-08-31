import { TestBed } from '@angular/core/testing';

import { AnylineService } from './anyline.service';

describe('AnylineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnylineService = TestBed.get(AnylineService);
    expect(service).toBeTruthy();
  });
});
