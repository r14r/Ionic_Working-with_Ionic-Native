import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOSFilePickerPage } from './i-osfile-picker.page';

describe('IOSFilePickerPage', () => {
  let component: IOSFilePickerPage;
  let fixture: ComponentFixture<IOSFilePickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOSFilePickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOSFilePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
