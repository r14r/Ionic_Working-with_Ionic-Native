import { TestBed } from '@angular/core/testing';

import { 3DTouchService } from './3-dtouch.service';

describe('3DTouchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: 3DTouchService = TestBed.get(3DTouchService);
    expect(service).toBeTruthy();
  });
});
