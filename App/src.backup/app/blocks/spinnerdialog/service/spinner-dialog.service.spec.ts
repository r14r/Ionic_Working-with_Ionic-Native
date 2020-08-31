import { TestBed } from '@angular/core/testing';

import { SpinnerDialogService } from './spinner-dialog.service';

describe('SpinnerDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpinnerDialogService = TestBed.get(SpinnerDialogService);
    expect(service).toBeTruthy();
  });
});
