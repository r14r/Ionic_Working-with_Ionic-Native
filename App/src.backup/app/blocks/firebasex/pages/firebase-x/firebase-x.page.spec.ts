import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseXPage } from './firebase-x.page';

describe('FirebaseXPage', () => {
  let component: FirebaseXPage;
  let fixture: ComponentFixture<FirebaseXPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseXPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
