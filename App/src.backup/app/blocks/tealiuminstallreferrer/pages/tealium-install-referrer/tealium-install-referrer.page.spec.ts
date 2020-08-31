import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TealiumInstallReferrerPage } from './tealium-install-referrer.page';

describe('TealiumInstallReferrerPage', () => {
  let component: TealiumInstallReferrerPage;
  let fixture: ComponentFixture<TealiumInstallReferrerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TealiumInstallReferrerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TealiumInstallReferrerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
