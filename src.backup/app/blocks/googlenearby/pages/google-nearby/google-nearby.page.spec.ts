import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleNearbyPage } from './google-nearby.page';

describe('GoogleNearbyPage', () => {
  let component: GoogleNearbyPage;
  let fixture: ComponentFixture<GoogleNearbyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleNearbyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleNearbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
