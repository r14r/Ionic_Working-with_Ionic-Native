import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicControlsPage } from './music-controls.page';

describe('MusicControlsPage', () => {
  let component: MusicControlsPage;
  let fixture: ComponentFixture<MusicControlsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicControlsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicControlsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
