import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloaderPage } from './downloader.page';

describe('DownloaderPage', () => {
  let component: DownloaderPage;
  let fixture: ComponentFixture<DownloaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
