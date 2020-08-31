import { TestBed } from '@angular/core/testing';

import { CouchbaseLiteService } from './couchbase-lite.service';

describe('CouchbaseLiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouchbaseLiteService = TestBed.get(CouchbaseLiteService);
    expect(service).toBeTruthy();
  });
});
