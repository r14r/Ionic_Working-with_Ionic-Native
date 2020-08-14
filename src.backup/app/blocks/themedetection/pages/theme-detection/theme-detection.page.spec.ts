import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDetectionPage } from './theme-detection.page';

describe('ThemeDetectionPage', () => {
  let component: ThemeDetectionPage;
  let fixture: ComponentFixture<ThemeDetectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeDetectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
