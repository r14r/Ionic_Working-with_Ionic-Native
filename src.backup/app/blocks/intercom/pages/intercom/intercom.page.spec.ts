import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercomPage } from './intercom.page';

describe('IntercomPage', () => {
  let component: IntercomPage;
  let fixture: ComponentFixture<IntercomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
