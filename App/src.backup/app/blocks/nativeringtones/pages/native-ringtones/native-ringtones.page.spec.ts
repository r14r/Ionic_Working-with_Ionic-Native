import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeRingtonesPage } from './native-ringtones.page';

describe('NativeRingtonesPage', () => {
  let component: NativeRingtonesPage;
  let fixture: ComponentFixture<NativeRingtonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeRingtonesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeRingtonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
