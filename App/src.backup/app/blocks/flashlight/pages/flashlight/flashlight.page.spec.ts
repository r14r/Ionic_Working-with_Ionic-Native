import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashlightPage } from './flashlight.page';

describe('FlashlightPage', () => {
  let component: FlashlightPage;
  let fixture: ComponentFixture<FlashlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashlightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
