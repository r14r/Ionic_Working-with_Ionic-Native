import { TestBed } from '@angular/core/testing';

import { SqliteDbCopyService } from './sqlite-db-copy.service';

describe('SqliteDbCopyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqliteDbCopyService = TestBed.get(SqliteDbCopyService);
    expect(service).toBeTruthy();
  });
});
