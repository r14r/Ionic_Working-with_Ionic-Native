import { TestBed } from '@angular/core/testing';

import { WebServerService } from './web-server.service';

describe('WebServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebServerService = TestBed.get(WebServerService);
    expect(service).toBeTruthy();
  });
});
