import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchbaseLitePage } from './couchbase-lite.page';

describe('CouchbaseLitePage', () => {
  let component: CouchbaseLitePage;
  let fixture: ComponentFixture<CouchbaseLitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchbaseLitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchbaseLitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
