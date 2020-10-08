import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyAlbumComponent } from './spotify-album.component';

describe('SpotifyAlbumComponent', () => {
  let component: SpotifyAlbumComponent;
  let fixture: ComponentFixture<SpotifyAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
