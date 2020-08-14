import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklightPage } from './backlight.page';

describe('BacklightPage', () => {
  let component: BacklightPage;
  let fixture: ComponentFixture<BacklightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
