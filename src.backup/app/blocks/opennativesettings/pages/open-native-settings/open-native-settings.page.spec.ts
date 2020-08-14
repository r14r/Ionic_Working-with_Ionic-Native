import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNativeSettingsPage } from './open-native-settings.page';

describe('OpenNativeSettingsPage', () => {
  let component: OpenNativeSettingsPage;
  let fixture: ComponentFixture<OpenNativeSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenNativeSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenNativeSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
