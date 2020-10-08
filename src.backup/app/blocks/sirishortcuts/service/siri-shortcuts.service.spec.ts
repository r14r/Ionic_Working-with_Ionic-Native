import { TestBed } from '@angular/core/testing';

import { SiriShortcutsService } from './siri-shortcuts.service';

describe('SiriShortcutsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiriShortcutsService = TestBed.get(SiriShortcutsService);
    expect(service).toBeTruthy();
  });
});
