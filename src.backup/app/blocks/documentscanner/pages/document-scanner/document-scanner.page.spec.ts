import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentScannerPage } from './document-scanner.page';

describe('DocumentScannerPage', () => {
  let component: DocumentScannerPage;
  let fixture: ComponentFixture<DocumentScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentScannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
