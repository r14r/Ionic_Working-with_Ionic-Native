import { TestBed } from '@angular/core/testing';

import { BrowserTabService } from './browser-tab.service';

describe('BrowserTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserTabService = TestBed.get(BrowserTabService);
    expect(service).toBeTruthy();
  });
});
