import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioManagementPage } from './audio-management.page';

describe('AudioManagementPage', () => {
  let component: AudioManagementPage;
  let fixture: ComponentFixture<AudioManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
