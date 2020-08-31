import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABBYYRealTimeRecognitionPage } from './abbyy.page';

describe('ABBYYRealTimeRecognitionPage', () => {
  let component: ABBYYRealTimeRecognitionPage;
  let fixture: ComponentFixture<ABBYYRealTimeRecognitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ABBYYRealTimeRecognitionPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABBYYRealTimeRecognitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
