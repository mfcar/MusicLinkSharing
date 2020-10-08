import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerAlbumComponent } from './deezer-album.component';

describe('DeezerAlbumComponent', () => {
  let component: DeezerAlbumComponent;
  let fixture: ComponentFixture<DeezerAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
