import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintAIOPage } from './fingerprint-aio.page';

describe('FingerprintAIOPage', () => {
  let component: FingerprintAIOPage;
  let fixture: ComponentFixture<FingerprintAIOPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerprintAIOPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintAIOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
