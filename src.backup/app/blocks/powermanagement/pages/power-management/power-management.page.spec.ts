import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerManagementPage } from './power-management.page';

describe('PowerManagementPage', () => {
  let component: PowerManagementPage;
  let fixture: ComponentFixture<PowerManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
