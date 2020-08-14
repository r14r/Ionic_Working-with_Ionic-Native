import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZBarPage } from './zbar.page';

describe('ZBarPage', () => {
  let component: ZBarPage;
  let fixture: ComponentFixture<ZBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
