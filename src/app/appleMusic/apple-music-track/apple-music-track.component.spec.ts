import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleMusicTrackComponent } from './apple-music-track.component';

describe('AppleMusicTrackComponent', () => {
  let component: AppleMusicTrackComponent;
  let fixture: ComponentFixture<AppleMusicTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleMusicTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleMusicTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
