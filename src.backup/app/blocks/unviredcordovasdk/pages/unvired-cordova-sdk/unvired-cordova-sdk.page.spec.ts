import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnviredCordovaSDKPage } from './unvired-cordova-sdk.page';

describe('UnviredCordovaSDKPage', () => {
  let component: UnviredCordovaSDKPage;
  let fixture: ComponentFixture<UnviredCordovaSDKPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnviredCordovaSDKPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnviredCordovaSDKPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
