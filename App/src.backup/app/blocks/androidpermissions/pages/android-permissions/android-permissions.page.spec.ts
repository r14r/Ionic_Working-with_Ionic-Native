import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidPermissionsPage } from './android-permissions.page';

describe('AndroidPermissionsPage', () => {
  let component: AndroidPermissionsPage;
  let fixture: ComponentFixture<AndroidPermissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidPermissionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidPermissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
