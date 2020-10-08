import { TestBed } from '@angular/core/testing';

import { LineLoginService } from './line-login.service';

describe('LineLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineLoginService = TestBed.get(LineLoginService);
    expect(service).toBeTruthy();
  });
});
