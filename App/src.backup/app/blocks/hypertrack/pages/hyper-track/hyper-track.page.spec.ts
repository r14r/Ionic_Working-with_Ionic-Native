import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperTrackPage } from './hyper-track.page';

describe('HyperTrackPage', () => {
  let component: HyperTrackPage;
  let fixture: ComponentFixture<HyperTrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyperTrackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
