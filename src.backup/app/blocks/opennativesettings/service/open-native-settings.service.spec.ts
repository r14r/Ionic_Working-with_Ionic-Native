import { TestBed } from '@angular/core/testing';

import { OpenNativeSettingsService } from './open-native-settings.service';

describe('OpenNativeSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenNativeSettingsService = TestBed.get(OpenNativeSettingsService);
    expect(service).toBeTruthy();
  });
});
