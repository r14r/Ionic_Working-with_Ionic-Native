import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenALPRPage } from './open-alpr.page';

describe('OpenALPRPage', () => {
  let component: OpenALPRPage;
  let fixture: ComponentFixture<OpenALPRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenALPRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenALPRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
