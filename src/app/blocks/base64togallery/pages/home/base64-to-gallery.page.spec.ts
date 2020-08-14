import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ToGalleryPage } from './base64-to-gallery.page';

describe('Base64ToGalleryPage', () => {
  let component: Base64ToGalleryPage;
  let fixture: ComponentFixture<Base64ToGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64ToGalleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64ToGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
