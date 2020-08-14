import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JAnalyticsPage } from './j-analytics.page';

describe('JAnalyticsPage', () => {
  let component: JAnalyticsPage;
  let fixture: ComponentFixture<JAnalyticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JAnalyticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
