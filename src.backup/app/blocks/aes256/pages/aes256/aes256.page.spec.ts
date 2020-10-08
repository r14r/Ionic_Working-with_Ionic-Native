import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AES256Page } from './aes256.page';

describe('AES256Page', () => {
  let component: AES256Page;
  let fixture: ComponentFixture<AES256Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AES256Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AES256Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
