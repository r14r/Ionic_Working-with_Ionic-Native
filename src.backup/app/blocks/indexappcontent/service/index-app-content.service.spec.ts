import { TestBed } from '@angular/core/testing';

import { IndexAppContentService } from './index-app-content.service';

describe('IndexAppContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexAppContentService = TestBed.get(IndexAppContentService);
    expect(service).toBeTruthy();
  });
});
