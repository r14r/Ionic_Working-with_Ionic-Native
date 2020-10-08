import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterPage } from './printer.page';

describe('PrinterPage', () => {
  let component: PrinterPage;
  let fixture: ComponentFixture<PrinterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
