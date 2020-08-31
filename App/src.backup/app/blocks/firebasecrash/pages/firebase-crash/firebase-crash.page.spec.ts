import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCrashPage } from './firebase-crash.page';

describe('FirebaseCrashPage', () => {
  let component: FirebaseCrashPage;
  let fixture: ComponentFixture<FirebaseCrashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseCrashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseCrashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
