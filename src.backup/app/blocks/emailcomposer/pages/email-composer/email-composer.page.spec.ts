import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailComposerPage } from './email-composer.page';

describe('EmailComposerPage', () => {
  let component: EmailComposerPage;
  let fixture: ComponentFixture<EmailComposerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailComposerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComposerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
