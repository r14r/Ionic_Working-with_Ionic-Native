import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TealiumPage } from './tealium.page';

describe('TealiumPage', () => {
  let component: TealiumPage;
  let fixture: ComponentFixture<TealiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TealiumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TealiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
