import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimoteBeaconsPage } from './estimote-beacons.page';

describe('EstimoteBeaconsPage', () => {
  let component: EstimoteBeaconsPage;
  let fixture: ComponentFixture<EstimoteBeaconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimoteBeaconsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimoteBeaconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
