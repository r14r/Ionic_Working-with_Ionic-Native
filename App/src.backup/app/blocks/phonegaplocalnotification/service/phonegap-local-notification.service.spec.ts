import { TestBed } from '@angular/core/testing';

import { PhonegapLocalNotificationService } from './phonegap-local-notification.service';

describe('PhonegapLocalNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonegapLocalNotificationService = TestBed.get(PhonegapLocalNotificationService);
    expect(service).toBeTruthy();
  });
});
