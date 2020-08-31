import { TestBed } from '@angular/core/testing';

import { SQLitePorterService } from './sqlite-porter.service';

describe('SQLitePorterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SQLitePorterService = TestBed.get(SQLitePorterService);
    expect(service).toBeTruthy();
  });
});
