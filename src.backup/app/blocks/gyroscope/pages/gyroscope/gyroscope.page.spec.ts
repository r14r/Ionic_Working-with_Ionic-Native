import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GyroscopePage } from './gyroscope.page';

describe('GyroscopePage', () => {
  let component: GyroscopePage;
  let fixture: ComponentFixture<GyroscopePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GyroscopePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyroscopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
