import { TestBed } from '@angular/core/testing';

import { SafariViewControllerService } from './safari-view-controller.service';

describe('SafariViewControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafariViewControllerService = TestBed.get(SafariViewControllerService);
    expect(service).toBeTruthy();
  });
});
