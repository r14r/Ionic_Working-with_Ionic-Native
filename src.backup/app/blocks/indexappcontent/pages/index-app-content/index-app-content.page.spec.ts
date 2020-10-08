import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAppContentPage } from './index-app-content.page';

describe('IndexAppContentPage', () => {
  let component: IndexAppContentPage;
  let fixture: ComponentFixture<IndexAppContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAppContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAppContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
