import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueDeviceIDPage } from './unique-device-id.page';

describe('UniqueDeviceIDPage', () => {
  let component: UniqueDeviceIDPage;
  let fixture: ComponentFixture<UniqueDeviceIDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueDeviceIDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueDeviceIDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
