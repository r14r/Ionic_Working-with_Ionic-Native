import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureStoragePage } from './secure-storage.page';

describe('SecureStoragePage', () => {
  let component: SecureStoragePage;
  let fixture: ComponentFixture<SecureStoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureStoragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
