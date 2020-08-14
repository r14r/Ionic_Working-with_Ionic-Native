import { TestBed } from '@angular/core/testing';

import { LastCamService } from './last-cam.service';

describe('LastCamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastCamService = TestBed.get(LastCamService);
    expect(service).toBeTruthy();
  });
});
