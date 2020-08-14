import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchNavigatorPage } from './launch-navigator.page';

describe('LaunchNavigatorPage', () => {
  let component: LaunchNavigatorPage;
  let fixture: ComponentFixture<LaunchNavigatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchNavigatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchNavigatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
