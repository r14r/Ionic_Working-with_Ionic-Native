import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCamPage } from './last-cam.page';

describe('LastCamPage', () => {
  let component: LastCamPage;
  let fixture: ComponentFixture<LastCamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
