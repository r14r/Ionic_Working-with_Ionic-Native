import { TestBed } from '@angular/core/testing';

import { NativePageTransitionsService } from './native-page-transitions.service';

describe('NativePageTransitionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NativePageTransitionsService = TestBed.get(NativePageTransitionsService);
    expect(service).toBeTruthy();
  });
});
