import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCatchPage } from './bio-catch.page';

describe('BioCatchPage', () => {
  let component: BioCatchPage;
  let fixture: ComponentFixture<BioCatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioCatchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
