import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLibraryPage } from './photo-library.page';

describe('PhotoLibraryPage', () => {
  let component: PhotoLibraryPage;
  let fixture: ComponentFixture<PhotoLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoLibraryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
