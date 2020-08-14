import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchIoPage } from './branch-io.page';

describe('BranchIoPage', () => {
  let component: BranchIoPage;
  let fixture: ComponentFixture<BranchIoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchIoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchIoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
