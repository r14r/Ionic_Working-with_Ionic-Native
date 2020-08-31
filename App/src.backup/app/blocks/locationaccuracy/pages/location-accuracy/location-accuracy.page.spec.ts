import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAccuracyPage } from './location-accuracy.page';

describe('LocationAccuracyPage', () => {
  let component: LocationAccuracyPage;
  let fixture: ComponentFixture<LocationAccuracyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAccuracyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAccuracyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
