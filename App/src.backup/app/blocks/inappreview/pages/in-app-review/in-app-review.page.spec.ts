import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppReviewPage } from './in-app-review.page';

describe('InAppReviewPage', () => {
  let component: InAppReviewPage;
  let fixture: ComponentFixture<InAppReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
