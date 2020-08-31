import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGeolocationPage } from './background-geolocation.page';

describe('BackgroundGeolocationPage', () => {
  let component: BackgroundGeolocationPage;
  let fixture: ComponentFixture<BackgroundGeolocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundGeolocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundGeolocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
