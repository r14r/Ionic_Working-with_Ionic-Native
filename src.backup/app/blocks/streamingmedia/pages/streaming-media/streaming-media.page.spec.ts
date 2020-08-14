import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingMediaPage } from './streaming-media.page';

describe('StreamingMediaPage', () => {
  let component: StreamingMediaPage;
  let fixture: ComponentFixture<StreamingMediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingMediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
