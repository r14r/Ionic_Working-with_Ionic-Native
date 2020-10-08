import { TestBed } from '@angular/core/testing';

import { AutostartService } from './autostart.service';

describe('AutostartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutostartService = TestBed.get(AutostartService);
    expect(service).toBeTruthy();
  });
});
