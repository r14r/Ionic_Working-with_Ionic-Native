import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariViewControllerPage } from './safari-view-controller.page';

describe('SafariViewControllerPage', () => {
  let component: SafariViewControllerPage;
  let fixture: ComponentFixture<SafariViewControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafariViewControllerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariViewControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
