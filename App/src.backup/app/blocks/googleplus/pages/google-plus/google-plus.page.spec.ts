import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlusPage } from './google-plus.page';

describe('GooglePlusPage', () => {
  let component: GooglePlusPage;
  let fixture: ComponentFixture<GooglePlusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePlusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
