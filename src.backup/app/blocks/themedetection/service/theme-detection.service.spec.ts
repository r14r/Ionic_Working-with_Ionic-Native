import { TestBed } from '@angular/core/testing';

import { ThemeDetectionService } from './theme-detection.service';

describe('ThemeDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeDetectionService = TestBed.get(ThemeDetectionService);
    expect(service).toBeTruthy();
  });
});
