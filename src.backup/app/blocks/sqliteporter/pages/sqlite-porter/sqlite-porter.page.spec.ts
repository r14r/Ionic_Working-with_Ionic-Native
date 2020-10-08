import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SQLitePorterPage } from './sqlite-porter.page';

describe('SQLitePorterPage', () => {
  let component: SQLitePorterPage;
  let fixture: ComponentFixture<SQLitePorterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SQLitePorterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SQLitePorterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
