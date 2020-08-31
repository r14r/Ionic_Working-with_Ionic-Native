import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMobFreePage } from './ad-mob-free.page';

describe('AdMobFreePage', () => {
  let component: AdMobFreePage;
  let fixture: ComponentFixture<AdMobFreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMobFreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMobFreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
