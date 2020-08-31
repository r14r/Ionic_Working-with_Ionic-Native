import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechKitPage } from './speech-kit.page';

describe('SpeechKitPage', () => {
  let component: SpeechKitPage;
  let fixture: ComponentFixture<SpeechKitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechKitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechKitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
