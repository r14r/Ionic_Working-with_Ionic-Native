import { TestBed } from '@angular/core/testing';

import { NetworkInterfaceService } from './network-interface.service';

describe('NetworkInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkInterfaceService = TestBed.get(NetworkInterfaceService);
    expect(service).toBeTruthy();
  });
});
