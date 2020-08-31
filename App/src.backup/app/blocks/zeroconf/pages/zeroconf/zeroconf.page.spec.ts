import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroconfPage } from './zeroconf.page';

describe('ZeroconfPage', () => {
  let component: ZeroconfPage;
  let fixture: ComponentFixture<ZeroconfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroconfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroconfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
