import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSADALPage } from './msadal.page';

describe('MSADALPage', () => {
  let component: MSADALPage;
  let fixture: ComponentFixture<MSADALPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSADALPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSADALPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
