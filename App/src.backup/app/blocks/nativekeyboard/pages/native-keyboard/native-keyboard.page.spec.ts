import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeKeyboardPage } from './native-keyboard.page';

describe('NativeKeyboardPage', () => {
  let component: NativeKeyboardPage;
  let fixture: ComponentFixture<NativeKeyboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeKeyboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeKeyboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
