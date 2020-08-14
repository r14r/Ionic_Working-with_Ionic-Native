import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePushPage } from './code-push.page';

describe('CodePushPage', () => {
  let component: CodePushPage;
  let fixture: ComponentFixture<CodePushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePushPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
