import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMobPlusPage } from './ad-mob-plus.page';

describe('AdMobPlusPage', () => {
  let component: AdMobPlusPage;
  let fixture: ComponentFixture<AdMobPlusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMobPlusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMobPlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
