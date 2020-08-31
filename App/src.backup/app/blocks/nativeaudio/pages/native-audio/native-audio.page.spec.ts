import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeAudioPage } from './native-audio.page';

describe('NativeAudioPage', () => {
  let component: NativeAudioPage;
  let fixture: ComponentFixture<NativeAudioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeAudioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
