import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepcounterPage } from './stepcounter.page';

describe('StepcounterPage', () => {
  let component: StepcounterPage;
  let fixture: ComponentFixture<StepcounterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepcounterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepcounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
