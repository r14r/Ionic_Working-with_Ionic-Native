import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollbarPage } from './rollbar.page';

describe('RollbarPage', () => {
  let component: RollbarPage;
  let fixture: ComponentFixture<RollbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
