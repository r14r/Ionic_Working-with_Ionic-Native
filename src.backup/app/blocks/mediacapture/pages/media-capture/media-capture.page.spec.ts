import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCapturePage } from './media-capture.page';

describe('MediaCapturePage', () => {
  let component: MediaCapturePage;
  let fixture: ComponentFixture<MediaCapturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaCapturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCapturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
