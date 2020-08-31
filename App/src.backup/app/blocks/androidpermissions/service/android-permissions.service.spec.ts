import { TestBed } from '@angular/core/testing';

import { AndroidPermissionsService } from './android-permissions.service';

describe('AndroidPermissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AndroidPermissionsService = TestBed.get(AndroidPermissionsService);
    expect(service).toBeTruthy();
  });
});
