import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsomniaPage } from './insomnia.page';

describe('InsomniaPage', () => {
  let component: InsomniaPage;
  let fixture: ComponentFixture<InsomniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsomniaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsomniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
