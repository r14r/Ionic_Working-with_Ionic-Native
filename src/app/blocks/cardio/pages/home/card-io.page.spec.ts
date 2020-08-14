import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIOPage } from './card-io.page';

describe('CardIOPage', () => {
  let component: CardIOPage;
  let fixture: ComponentFixture<CardIOPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIOPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
