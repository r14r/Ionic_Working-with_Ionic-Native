import { TestBed } from '@angular/core/testing';

import { TouchIDService } from './touch-id.service';

describe('TouchIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouchIDService = TestBed.get(TouchIDService);
    expect(service).toBeTruthy();
  });
});
