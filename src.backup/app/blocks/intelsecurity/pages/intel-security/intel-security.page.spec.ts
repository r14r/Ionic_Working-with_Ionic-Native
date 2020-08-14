import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelSecurityPage } from './intel-security.page';

describe('IntelSecurityPage', () => {
  let component: IntelSecurityPage;
  let fixture: ComponentFixture<IntelSecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelSecurityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
