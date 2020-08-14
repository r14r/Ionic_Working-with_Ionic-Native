import { TestBed } from '@angular/core/testing';

import { NativeKeyboardService } from './native-keyboard.service';

describe('NativeKeyboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NativeKeyboardService = TestBed.get(NativeKeyboardService);
    expect(service).toBeTruthy();
  });
});
