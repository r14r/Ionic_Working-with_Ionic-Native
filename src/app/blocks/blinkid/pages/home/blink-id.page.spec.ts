import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkIdPage } from './blink-id.page';

describe('BlinkIdPage', () => {
  let component: BlinkIdPage;
  let fixture: ComponentFixture<BlinkIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkIdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
