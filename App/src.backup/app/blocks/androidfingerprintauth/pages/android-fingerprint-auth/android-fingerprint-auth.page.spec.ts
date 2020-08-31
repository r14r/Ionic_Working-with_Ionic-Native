import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidFingerprintAuthPage } from './android-fingerprint-auth.page';

describe('AndroidFingerprintAuthPage', () => {
  let component: AndroidFingerprintAuthPage;
  let fixture: ComponentFixture<AndroidFingerprintAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidFingerprintAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidFingerprintAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
