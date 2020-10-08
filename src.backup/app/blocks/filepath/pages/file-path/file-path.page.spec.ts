import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePathPage } from './file-path.page';

describe('FilePathPage', () => {
  let component: FilePathPage;
  let fixture: ComponentFixture<FilePathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePathPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
