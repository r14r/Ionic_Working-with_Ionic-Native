import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeychainTouchIdPage } from './keychain-touch-id.page';

describe('KeychainTouchIdPage', () => {
  let component: KeychainTouchIdPage;
  let fixture: ComponentFixture<KeychainTouchIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeychainTouchIdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeychainTouchIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
