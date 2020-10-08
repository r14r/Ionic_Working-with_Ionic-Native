import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPage } from './pro.page';

describe('ProPage', () => {
  let component: ProPage;
  let fixture: ComponentFixture<ProPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
