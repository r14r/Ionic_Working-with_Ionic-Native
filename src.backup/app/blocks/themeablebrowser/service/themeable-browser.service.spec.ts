import { TestBed } from '@angular/core/testing';

import { ThemeableBrowserService } from './themeable-browser.service';

describe('ThemeableBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeableBrowserService = TestBed.get(ThemeableBrowserService);
    expect(service).toBeTruthy();
  });
});
