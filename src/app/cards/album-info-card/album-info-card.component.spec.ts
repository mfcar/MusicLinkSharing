import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfoCardComponent } from './album-info-card.component';

describe('AlbumInfoCardComponent', () => {
  let component: AlbumInfoCardComponent;
  let fixture: ComponentFixture<AlbumInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
