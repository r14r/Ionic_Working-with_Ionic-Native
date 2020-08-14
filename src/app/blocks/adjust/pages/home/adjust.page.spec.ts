import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustPage } from './adjust.page';

describe('AdjustPage', () => {
  let component: AdjustPage;
  let fixture: ComponentFixture<AdjustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
