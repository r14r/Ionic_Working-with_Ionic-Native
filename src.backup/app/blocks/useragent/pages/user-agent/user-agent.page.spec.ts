import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAgentPage } from './user-agent.page';

describe('UserAgentPage', () => {
  let component: UserAgentPage;
  let fixture: ComponentFixture<UserAgentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAgentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
