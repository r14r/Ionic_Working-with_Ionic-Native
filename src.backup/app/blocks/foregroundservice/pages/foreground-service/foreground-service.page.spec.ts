import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForegroundServicePage } from './foreground-service.page';

describe('ForegroundServicePage', () => {
  let component: ForegroundServicePage;
  let fixture: ComponentFixture<ForegroundServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForegroundServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForegroundServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
