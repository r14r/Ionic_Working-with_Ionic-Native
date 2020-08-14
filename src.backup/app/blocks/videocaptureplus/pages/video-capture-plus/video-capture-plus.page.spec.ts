import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCapturePlusPage } from './video-capture-plus.page';

describe('VideoCapturePlusPage', () => {
  let component: VideoCapturePlusPage;
  let fixture: ComponentFixture<VideoCapturePlusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCapturePlusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCapturePlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
