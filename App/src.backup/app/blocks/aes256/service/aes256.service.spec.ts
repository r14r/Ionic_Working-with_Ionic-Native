import { TestBed } from '@angular/core/testing';

import { AES256Service } from './aes256.service';

describe('AES256Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AES256Service = TestBed.get(AES256Service);
    expect(service).toBeTruthy();
  });
});
