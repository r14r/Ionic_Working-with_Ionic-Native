import { TestBed } from '@angular/core/testing';

import { DNSService } from './dns.service';

describe('DNSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DNSService = TestBed.get(DNSService);
    expect(service).toBeTruthy();
  });
});
