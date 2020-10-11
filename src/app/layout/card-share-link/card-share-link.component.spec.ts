import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShareLinkComponent } from './card-share-link.component';

describe('CardShareLinkComponent', () => {
  let component: CardShareLinkComponent;
  let fixture: ComponentFixture<CardShareLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShareLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShareLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
