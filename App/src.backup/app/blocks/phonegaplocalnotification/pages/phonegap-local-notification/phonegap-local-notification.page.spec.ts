import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonegapLocalNotificationPage } from './phonegap-local-notification.page';

describe('PhonegapLocalNotificationPage', () => {
  let component: PhonegapLocalNotificationPage;
  let fixture: ComponentFixture<PhonegapLocalNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonegapLocalNotificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonegapLocalNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
