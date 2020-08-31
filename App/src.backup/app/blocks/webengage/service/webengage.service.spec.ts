import { TestBed } from '@angular/core/testing';

import { WebengageService } from './webengage.service';

describe('WebengageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebengageService = TestBed.get(WebengageService);
    expect(service).toBeTruthy();
  });
});
