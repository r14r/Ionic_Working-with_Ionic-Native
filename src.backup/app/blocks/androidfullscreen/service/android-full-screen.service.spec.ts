import { TestBed } from '@angular/core/testing';

import { AndroidFullScreenService } from './android-full-screen.service';

describe('AndroidFullScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AndroidFullScreenService = TestBed.get(AndroidFullScreenService);
    expect(service).toBeTruthy();
  });
});
