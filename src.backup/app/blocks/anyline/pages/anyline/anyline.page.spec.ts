import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnylinePage } from './anyline.page';

describe('AnylinePage', () => {
  let component: AnylinePage;
  let fixture: ComponentFixture<AnylinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnylinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnylinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
