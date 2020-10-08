import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicWebviewPage } from './ionic-webview.page';

describe('IonicWebviewPage', () => {
  let component: IonicWebviewPage;
  let fixture: ComponentFixture<IonicWebviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicWebviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicWebviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
