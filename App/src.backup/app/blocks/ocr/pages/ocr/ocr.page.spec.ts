import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OCRPage } from './ocr.page';

describe('OCRPage', () => {
  let component: OCRPage;
  let fixture: ComponentFixture<OCRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OCRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OCRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
