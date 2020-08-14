import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOrientationPage } from './screen-orientation.page';

describe('ScreenOrientationPage', () => {
  let component: ScreenOrientationPage;
  let fixture: ComponentFixture<ScreenOrientationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenOrientationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenOrientationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
