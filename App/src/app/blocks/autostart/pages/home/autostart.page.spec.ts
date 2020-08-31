import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutostartPage } from './autostart.page';

describe('AutostartPage', () => {
  let component: AutostartPage;
  let fixture: ComponentFixture<AutostartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutostartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutostartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
