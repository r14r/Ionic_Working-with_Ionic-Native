import { TestBed } from '@angular/core/testing';

import { AudioManagementService } from './audio-management.service';

describe('AudioManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioManagementService = TestBed.get(AudioManagementService);
    expect(service).toBeTruthy();
  });
});
