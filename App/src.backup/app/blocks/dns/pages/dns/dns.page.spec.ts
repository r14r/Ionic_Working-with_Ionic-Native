import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNSPage } from './dns.page';

describe('DNSPage', () => {
  let component: DNSPage;
  let fixture: ComponentFixture<DNSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
