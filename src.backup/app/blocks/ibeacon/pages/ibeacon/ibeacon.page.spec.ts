import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBeaconPage } from './ibeacon.page';

describe('IBeaconPage', () => {
  let component: IBeaconPage;
  let fixture: ComponentFixture<IBeaconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBeaconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBeaconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
