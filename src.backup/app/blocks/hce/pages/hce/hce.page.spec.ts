import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcePage } from './hce.page';

describe('HcePage', () => {
  let component: HcePage;
  let fixture: ComponentFixture<HcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
