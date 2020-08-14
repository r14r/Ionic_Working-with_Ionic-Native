import { TestBed } from '@angular/core/testing';

import { SSHConnectService } from './sshconnect.service';

describe('SSHConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SSHConnectService = TestBed.get(SSHConnectService);
    expect(service).toBeTruthy();
  });
});
