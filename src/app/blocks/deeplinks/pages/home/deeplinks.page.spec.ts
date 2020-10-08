import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeplinksPage } from './deeplinks.page';

describe('DeeplinksPage', () => {
  let component: DeeplinksPage;
  let fixture: ComponentFixture<DeeplinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeeplinksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeplinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
