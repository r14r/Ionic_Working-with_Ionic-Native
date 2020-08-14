import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidExoPlayerPage } from './android-exo-player.page';

describe('AndroidExoPlayerPage', () => {
  let component: AndroidExoPlayerPage;
  let fixture: ComponentFixture<AndroidExoPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidExoPlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidExoPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
