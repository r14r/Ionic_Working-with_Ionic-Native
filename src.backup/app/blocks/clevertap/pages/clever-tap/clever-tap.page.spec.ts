import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleverTapPage } from './clever-tap.page';

describe('CleverTapPage', () => {
  let component: CleverTapPage;
  let fixture: ComponentFixture<CleverTapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleverTapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleverTapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
