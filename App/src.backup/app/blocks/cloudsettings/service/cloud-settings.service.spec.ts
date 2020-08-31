import { TestBed } from '@angular/core/testing';

import { CloudSettingsService } from './cloud-settings.service';

describe('CloudSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudSettingsService = TestBed.get(CloudSettingsService);
    expect(service).toBeTruthy();
  });
});
