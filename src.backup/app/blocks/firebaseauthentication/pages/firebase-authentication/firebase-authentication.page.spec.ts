import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseAuthenticationPage } from './firebase-authentication.page';

describe('FirebaseAuthenticationPage', () => {
  let component: FirebaseAuthenticationPage;
  let fixture: ComponentFixture<FirebaseAuthenticationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseAuthenticationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseAuthenticationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
