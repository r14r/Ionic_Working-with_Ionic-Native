import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqliteDbCopyPage } from './sqlite-db-copy.page';

describe('SqliteDbCopyPage', () => {
  let component: SqliteDbCopyPage;
  let fixture: ComponentFixture<SqliteDbCopyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqliteDbCopyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqliteDbCopyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
