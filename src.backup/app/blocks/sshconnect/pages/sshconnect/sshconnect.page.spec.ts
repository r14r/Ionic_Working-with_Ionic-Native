import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSHConnectPage } from './sshconnect.page';

describe('SSHConnectPage', () => {
  let component: SSHConnectPage;
  let fixture: ComponentFixture<SSHConnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSHConnectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSHConnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
