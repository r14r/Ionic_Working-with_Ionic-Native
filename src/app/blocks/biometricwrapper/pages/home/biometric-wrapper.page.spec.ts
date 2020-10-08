import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricWrapperPage } from './biometric-wrapper.page';

describe('BiometricWrapperPage', () => {
  let component: BiometricWrapperPage;
  let fixture: ComponentFixture<BiometricWrapperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometricWrapperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiometricWrapperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
