import { TestBed } from '@angular/core/testing';

import { PinDialogService } from './pin-dialog.service';

describe('PinDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinDialogService = TestBed.get(PinDialogService);
    expect(service).toBeTruthy();
  });
});
