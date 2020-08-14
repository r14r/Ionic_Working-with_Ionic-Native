import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidFullScreenPage } from './android-full-screen.page';

describe('AndroidFullScreenPage', () => {
  let component: AndroidFullScreenPage;
  let fixture: ComponentFixture<AndroidFullScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidFullScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidFullScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
