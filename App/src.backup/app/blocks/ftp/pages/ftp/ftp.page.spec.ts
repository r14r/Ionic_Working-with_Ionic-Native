import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FTPPage } from './ftp.page';

describe('FTPPage', () => {
  let component: FTPPage;
  let fixture: ComponentFixture<FTPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FTPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FTPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
