import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlayGamesServicesPage } from './google-play-games-services.page';

describe('GooglePlayGamesServicesPage', () => {
  let component: GooglePlayGamesServicesPage;
  let fixture: ComponentFixture<GooglePlayGamesServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePlayGamesServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlayGamesServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
