import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInterfacePage } from './network-interface.page';

describe('NetworkInterfacePage', () => {
  let component: NetworkInterfacePage;
  let fixture: ComponentFixture<NetworkInterfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkInterfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkInterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
