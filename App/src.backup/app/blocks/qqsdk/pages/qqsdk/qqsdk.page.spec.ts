import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QQSDKPage } from './qqsdk.page';

describe('QQSDKPage', () => {
  let component: QQSDKPage;
  let fixture: ComponentFixture<QQSDKPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QQSDKPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QQSDKPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
