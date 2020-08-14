import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPRNTPage } from './star-prnt.page';

describe('StarPRNTPage', () => {
  let component: StarPRNTPage;
  let fixture: ComponentFixture<StarPRNTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarPRNTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarPRNTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
