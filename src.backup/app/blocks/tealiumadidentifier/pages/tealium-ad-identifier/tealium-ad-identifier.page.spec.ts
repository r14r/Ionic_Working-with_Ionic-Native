import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TealiumAdIdentifierPage } from './tealium-ad-identifier.page';

describe('TealiumAdIdentifierPage', () => {
  let component: TealiumAdIdentifierPage;
  let fixture: ComponentFixture<TealiumAdIdentifierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TealiumAdIdentifierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TealiumAdIdentifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
