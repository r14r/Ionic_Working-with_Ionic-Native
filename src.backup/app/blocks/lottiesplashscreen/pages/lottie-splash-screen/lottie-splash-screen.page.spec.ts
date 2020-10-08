import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieSplashScreenPage } from './lottie-splash-screen.page';

describe('LottieSplashScreenPage', () => {
  let component: LottieSplashScreenPage;
  let fixture: ComponentFixture<LottieSplashScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottieSplashScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottieSplashScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
