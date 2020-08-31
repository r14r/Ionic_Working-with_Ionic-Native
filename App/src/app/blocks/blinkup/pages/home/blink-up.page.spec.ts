import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkUpPage } from './blink-up.page';

describe('BlinkUpPage', () => {
  let component: BlinkUpPage;
  let fixture: ComponentFixture<BlinkUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
