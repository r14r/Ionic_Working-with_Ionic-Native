import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpdPage } from './httpd.page';

describe('HttpdPage', () => {
  let component: HttpdPage;
  let fixture: ComponentFixture<HttpdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
