import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JinsMemePage } from './jins-meme.page';

describe('JinsMemePage', () => {
  let component: JinsMemePage;
  let fixture: ComponentFixture<JinsMemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JinsMemePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JinsMemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
