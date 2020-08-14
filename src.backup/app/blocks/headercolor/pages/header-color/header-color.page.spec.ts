import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderColorPage } from './header-color.page';

describe('HeaderColorPage', () => {
  let component: HeaderColorPage;
  let fixture: ComponentFixture<HeaderColorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderColorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
