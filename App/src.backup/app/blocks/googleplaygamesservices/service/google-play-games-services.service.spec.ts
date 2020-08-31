import { TestBed } from '@angular/core/testing';

import { GooglePlayGamesServicesService } from './google-play-games-services.service';

describe('GooglePlayGamesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglePlayGamesServicesService = TestBed.get(GooglePlayGamesServicesService);
    expect(service).toBeTruthy();
  });
});
