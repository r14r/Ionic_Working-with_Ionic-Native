import { TestBed } from '@angular/core/testing';

import { WheelSelectorPluginService } from './wheel-selector-plugin.service';

describe('WheelSelectorPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WheelSelectorPluginService = TestBed.get(WheelSelectorPluginService);
    expect(service).toBeTruthy();
  });
});
