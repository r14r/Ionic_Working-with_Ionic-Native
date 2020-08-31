import { TestBed } from '@angular/core/testing';

import { ColoredBrowserTabsService } from './colored-browser-tabs.service';

describe('ColoredBrowserTabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColoredBrowserTabsService = TestBed.get(ColoredBrowserTabsService);
    expect(service).toBeTruthy();
  });
});
