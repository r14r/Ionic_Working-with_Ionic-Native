import { TestBed } from '@angular/core/testing';

import { JinsMemeService } from './jins-meme.service';

describe('JinsMemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JinsMemeService = TestBed.get(JinsMemeService);
    expect(service).toBeTruthy();
  });
});
