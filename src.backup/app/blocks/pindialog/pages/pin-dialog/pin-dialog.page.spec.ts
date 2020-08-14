import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinDialogPage } from './pin-dialog.page';

describe('PinDialogPage', () => {
  let component: PinDialogPage;
  let fixture: ComponentFixture<PinDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinDialogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
