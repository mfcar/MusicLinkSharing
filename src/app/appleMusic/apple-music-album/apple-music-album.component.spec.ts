import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleMusicAlbumComponent } from './apple-music-album.component';

describe('AppleMusicAlbumComponent', () => {
  let component: AppleMusicAlbumComponent;
  let fixture: ComponentFixture<AppleMusicAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleMusicAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleMusicAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
