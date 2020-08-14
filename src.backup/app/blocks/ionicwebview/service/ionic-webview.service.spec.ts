import { TestBed } from '@angular/core/testing';

import { IonicWebviewService } from './ionic-webview.service';

describe('IonicWebviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicWebviewService = TestBed.get(IonicWebviewService);
    expect(service).toBeTruthy();
  });
});
