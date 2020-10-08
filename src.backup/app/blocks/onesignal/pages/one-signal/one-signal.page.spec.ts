import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSignalPage } from './one-signal.page';

describe('OneSignalPage', () => {
  let component: OneSignalPage;
  let fixture: ComponentFixture<OneSignalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSignalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSignalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
