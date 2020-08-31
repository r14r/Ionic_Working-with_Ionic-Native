import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseConfigPage } from './firebase-config.page';

describe('FirebaseConfigPage', () => {
  let component: FirebaseConfigPage;
  let fixture: ComponentFixture<FirebaseConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseConfigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
