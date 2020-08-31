import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixpanelPage } from './mixpanel.page';

describe('MixpanelPage', () => {
  let component: MixpanelPage;
  let fixture: ComponentFixture<MixpanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixpanelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixpanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
