import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthKitPage } from './health-kit.page';

describe('HealthKitPage', () => {
  let component: HealthKitPage;
  let fixture: ComponentFixture<HealthKitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthKitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthKitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
