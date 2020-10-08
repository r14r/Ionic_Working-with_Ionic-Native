import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSettingsPage } from './cloud-settings.page';

describe('CloudSettingsPage', () => {
  let component: CloudSettingsPage;
  let fixture: ComponentFixture<CloudSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
