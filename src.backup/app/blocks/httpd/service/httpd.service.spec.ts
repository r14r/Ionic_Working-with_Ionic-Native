import { TestBed } from '@angular/core/testing';

import { HttpdService } from './httpd.service';

describe('HttpdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpdService = TestBed.get(HttpdService);
    expect(service).toBeTruthy();
  });
});
