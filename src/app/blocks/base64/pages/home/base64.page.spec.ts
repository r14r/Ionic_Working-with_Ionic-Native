import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64Page } from './base64.page';

describe('Base64Page', () => {
  let component: Base64Page;
  let fixture: ComponentFixture<Base64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
