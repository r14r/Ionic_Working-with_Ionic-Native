import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothLEPage } from './bluetooth-le.page';

describe('BluetoothLEPage', () => {
  let component: BluetoothLEPage;
  let fixture: ComponentFixture<BluetoothLEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluetoothLEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluetoothLEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
