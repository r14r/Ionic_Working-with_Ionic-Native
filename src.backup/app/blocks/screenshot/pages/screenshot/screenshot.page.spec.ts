import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotPage } from './screenshot.page';

describe('ScreenshotPage', () => {
  let component: ScreenshotPage;
  let fixture: ComponentFixture<ScreenshotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
