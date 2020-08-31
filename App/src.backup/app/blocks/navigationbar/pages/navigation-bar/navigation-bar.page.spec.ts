import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarPage } from './navigation-bar.page';

describe('NavigationBarPage', () => {
  let component: NavigationBarPage;
  let fixture: ComponentFixture<NavigationBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
