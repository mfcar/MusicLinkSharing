import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleMusicArtistComponent } from './apple-music-artist.component';

describe('AppleMusicArtistComponent', () => {
  let component: AppleMusicArtistComponent;
  let fixture: ComponentFixture<AppleMusicArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleMusicArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleMusicArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
