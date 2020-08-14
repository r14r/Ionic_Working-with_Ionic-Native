import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredBrowserTabsPage } from './colored-browser-tabs.page';

describe('ColoredBrowserTabsPage', () => {
  let component: ColoredBrowserTabsPage;
  let fixture: ComponentFixture<ColoredBrowserTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredBrowserTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredBrowserTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
