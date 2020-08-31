import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDirectoryPage } from './call-directory.page';

describe('CallDirectoryPage', () => {
  let component: CallDirectoryPage;
  let fixture: ComponentFixture<CallDirectoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDirectoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDirectoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
