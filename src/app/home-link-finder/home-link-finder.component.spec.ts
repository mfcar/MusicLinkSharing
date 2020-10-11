import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLinkFinderComponent } from './home-link-finder.component';

describe('HomeLinkFinderComponent', () => {
  let component: HomeLinkFinderComponent;
  let fixture: ComponentFixture<HomeLinkFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLinkFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLinkFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
