import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyAuthPage } from './spotify-auth.page';

describe('SpotifyAuthPage', () => {
  let component: SpotifyAuthPage;
  let fixture: ComponentFixture<SpotifyAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
