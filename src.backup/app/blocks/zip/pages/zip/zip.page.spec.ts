import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipPage } from './zip.page';

describe('ZipPage', () => {
  let component: ZipPage;
  let fixture: ComponentFixture<ZipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
