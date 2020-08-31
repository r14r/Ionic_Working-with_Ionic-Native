import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaoDeLocationPage } from './gao-de-location.page';

describe('GaoDeLocationPage', () => {
  let component: GaoDeLocationPage;
  let fixture: ComponentFixture<GaoDeLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaoDeLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaoDeLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
