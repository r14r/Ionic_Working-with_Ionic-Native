import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundFetchPage } from './background-fetch.page';

describe('BackgroundFetchPage', () => {
  let component: BackgroundFetchPage;
  let fixture: ComponentFixture<BackgroundFetchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundFetchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundFetchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
