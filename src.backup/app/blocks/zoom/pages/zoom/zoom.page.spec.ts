import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPage } from './zoom.page';

describe('ZoomPage', () => {
  let component: ZoomPage;
  let fixture: ComponentFixture<ZoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
