import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SQLitePage } from './sqlite.page';

describe('SQLitePage', () => {
  let component: SQLitePage;
  let fixture: ComponentFixture<SQLitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SQLitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SQLitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
