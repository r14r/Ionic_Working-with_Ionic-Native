import { TestBed } from '@angular/core/testing';

import { NativeAudioService } from './native-audio.service';

describe('NativeAudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NativeAudioService = TestBed.get(NativeAudioService);
    expect(service).toBeTruthy();
  });
});
