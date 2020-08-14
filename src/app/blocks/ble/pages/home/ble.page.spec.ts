import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BLEPage } from './ble.page';

describe('BLEPage', () => {
  let component: BLEPage;
  let fixture: ComponentFixture<BLEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BLEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BLEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
