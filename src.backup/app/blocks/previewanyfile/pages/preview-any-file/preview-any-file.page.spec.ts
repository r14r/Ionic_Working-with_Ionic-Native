import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAnyFilePage } from './preview-any-file.page';

describe('PreviewAnyFilePage', () => {
  let component: PreviewAnyFilePage;
  let fixture: ComponentFixture<PreviewAnyFilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAnyFilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAnyFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
