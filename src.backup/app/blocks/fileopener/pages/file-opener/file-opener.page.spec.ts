import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOpenerPage } from './file-opener.page';

describe('FileOpenerPage', () => {
  let component: FileOpenerPage;
  let fixture: ComponentFixture<FileOpenerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileOpenerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileOpenerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
