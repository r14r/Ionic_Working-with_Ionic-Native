import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResizerPage } from './image-resizer.page';

describe('ImageResizerPage', () => {
  let component: ImageResizerPage;
  let fixture: ComponentFixture<ImageResizerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageResizerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageResizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
