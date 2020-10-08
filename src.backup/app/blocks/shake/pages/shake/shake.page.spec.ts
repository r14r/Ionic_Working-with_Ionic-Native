import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakePage } from './shake.page';

describe('ShakePage', () => {
  let component: ShakePage;
  let fixture: ComponentFixture<ShakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
