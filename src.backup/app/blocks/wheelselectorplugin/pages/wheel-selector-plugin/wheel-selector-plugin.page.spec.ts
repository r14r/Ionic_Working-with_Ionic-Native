import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSelectorPluginPage } from './wheel-selector-plugin.page';

describe('WheelSelectorPluginPage', () => {
  let component: WheelSelectorPluginPage;
  let fixture: ComponentFixture<WheelSelectorPluginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelSelectorPluginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelSelectorPluginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
