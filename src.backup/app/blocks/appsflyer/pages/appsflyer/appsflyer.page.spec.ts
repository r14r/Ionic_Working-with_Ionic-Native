import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsflyerPage } from './appsflyer.page';

describe('AppsflyerPage', () => {
  let component: AppsflyerPage;
  let fixture: ComponentFixture<AppsflyerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsflyerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsflyerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
