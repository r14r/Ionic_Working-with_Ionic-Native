import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalizationPage } from './globalization.page';

describe('GlobalizationPage', () => {
  let component: GlobalizationPage;
  let fixture: ComponentFixture<GlobalizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalizationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
