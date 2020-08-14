import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiduPushPage } from './baidu-push.page';

describe('BaiduPushPage', () => {
  let component: BaiduPushPage;
  let fixture: ComponentFixture<BaiduPushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiduPushPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiduPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
