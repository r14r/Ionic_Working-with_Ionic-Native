import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundModePage } from './background-mode.page';

describe('BackgroundModePage', () => {
  let component: BackgroundModePage;
  let fixture: ComponentFixture<BackgroundModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundModePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
