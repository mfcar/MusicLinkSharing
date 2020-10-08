import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerArtistComponent } from './deezer-artist.component';

describe('DeezerArtistComponent', () => {
  let component: DeezerArtistComponent;
  let fixture: ComponentFixture<DeezerArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
