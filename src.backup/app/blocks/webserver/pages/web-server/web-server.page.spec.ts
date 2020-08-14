import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServerPage } from './web-server.page';

describe('WebServerPage', () => {
  let component: WebServerPage;
  let fixture: ComponentFixture<WebServerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebServerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebServerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
