import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCodePushPage } from './hot-code-push.page';

describe('HotCodePushPage', () => {
  let component: HotCodePushPage;
  let fixture: ComponentFixture<HotCodePushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotCodePushPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotCodePushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
