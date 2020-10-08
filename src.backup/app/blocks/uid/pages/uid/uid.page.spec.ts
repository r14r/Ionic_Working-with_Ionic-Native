import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UidPage } from './uid.page';

describe('UidPage', () => {
  let component: UidPage;
  let fixture: ComponentFixture<UidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
