import { TestBed } from '@angular/core/testing';

import { QuikklyPluginService } from './quikkly-plugin.service';

describe('QuikklyPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuikklyPluginService = TestBed.get(QuikklyPluginService);
    expect(service).toBeTruthy();
  });
});
