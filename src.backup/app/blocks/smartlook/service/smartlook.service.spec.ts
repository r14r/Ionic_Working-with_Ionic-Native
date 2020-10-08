import { TestBed } from '@angular/core/testing';

import { SmartlookService } from './smartlook.service';

describe('SmartlookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartlookService = TestBed.get(SmartlookService);
    expect(service).toBeTruthy();
  });
});
