import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightnessPage } from './brightness.page';

describe('BrightnessPage', () => {
  let component: BrightnessPage;
  let fixture: ComponentFixture<BrightnessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrightnessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrightnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
