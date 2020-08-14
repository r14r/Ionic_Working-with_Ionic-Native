import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLauncherPage } from './app-launcher.page';

describe('AppLauncherPage', () => {
  let component: AppLauncherPage;
  let fixture: ComponentFixture<AppLauncherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLauncherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLauncherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
