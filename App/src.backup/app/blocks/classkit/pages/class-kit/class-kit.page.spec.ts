import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassKitPage } from './class-kit.page';

describe('ClassKitPage', () => {
  let component: ClassKitPage;
  let fixture: ComponentFixture<ClassKitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassKitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassKitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
