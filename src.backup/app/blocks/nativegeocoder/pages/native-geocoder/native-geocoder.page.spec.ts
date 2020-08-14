import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeGeocoderPage } from './native-geocoder.page';

describe('NativeGeocoderPage', () => {
  let component: NativeGeocoderPage;
  let fixture: ComponentFixture<NativeGeocoderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeGeocoderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeGeocoderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
