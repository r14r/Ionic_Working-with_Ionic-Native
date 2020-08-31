import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOSDocumentPickerPage } from './i-osdocument-picker.page';

describe('IOSDocumentPickerPage', () => {
  let component: IOSDocumentPickerPage;
  let fixture: ComponentFixture<IOSDocumentPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOSDocumentPickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOSDocumentPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
