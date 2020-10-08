import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulaDocumentReaderPage } from './regula-document-reader.page';

describe('RegulaDocumentReaderPage', () => {
  let component: RegulaDocumentReaderPage;
  let fixture: ComponentFixture<RegulaDocumentReaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulaDocumentReaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulaDocumentReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
