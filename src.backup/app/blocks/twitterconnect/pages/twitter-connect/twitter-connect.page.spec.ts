import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterConnectPage } from './twitter-connect.page';

describe('TwitterConnectPage', () => {
  let component: TwitterConnectPage;
  let fixture: ComponentFixture<TwitterConnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterConnectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterConnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
