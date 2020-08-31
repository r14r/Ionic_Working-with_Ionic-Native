import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMobProPage } from './ad-mob-pro.page';

describe('AdMobProPage', () => {
  let component: AdMobProPage;
  let fixture: ComponentFixture<AdMobProPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMobProPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMobProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
