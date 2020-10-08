import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeableBrowserPage } from './themeable-browser.page';

describe('ThemeableBrowserPage', () => {
  let component: ThemeableBrowserPage;
  let fixture: ComponentFixture<ThemeableBrowserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeableBrowserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeableBrowserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
