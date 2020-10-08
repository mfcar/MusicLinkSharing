import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerTrackComponent } from './deezer-track.component';

describe('DeezerTrackComponent', () => {
  let component: DeezerTrackComponent;
  let fixture: ComponentFixture<DeezerTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
