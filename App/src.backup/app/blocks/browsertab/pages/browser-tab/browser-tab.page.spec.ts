import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserTabPage } from './browser-tab.page';

describe('BrowserTabPage', () => {
  let component: BrowserTabPage;
  let fixture: ComponentFixture<BrowserTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
