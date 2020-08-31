import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenImagePage } from './full-screen-image.page';

describe('FullScreenImagePage', () => {
  let component: FullScreenImagePage;
  let fixture: ComponentFixture<FullScreenImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
