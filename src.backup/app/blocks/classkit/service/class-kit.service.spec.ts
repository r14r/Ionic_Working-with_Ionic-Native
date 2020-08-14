import { TestBed } from '@angular/core/testing';

import { ClassKitService } from './class-kit.service';

describe('ClassKitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassKitService = TestBed.get(ClassKitService);
    expect(service).toBeTruthy();
  });
});
