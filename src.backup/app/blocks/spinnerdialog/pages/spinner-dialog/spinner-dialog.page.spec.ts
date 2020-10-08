import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerDialogPage } from './spinner-dialog.page';

describe('SpinnerDialogPage', () => {
  let component: SpinnerDialogPage;
  let fixture: ComponentFixture<SpinnerDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerDialogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
