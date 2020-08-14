import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlookPage } from './smartlook.page';

describe('SmartlookPage', () => {
  let component: SmartlookPage;
  let fixture: ComponentFixture<SmartlookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartlookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartlookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
