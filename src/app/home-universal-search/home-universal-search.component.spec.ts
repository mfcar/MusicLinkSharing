import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUniversalSearchComponent } from './home-universal-search.component';

describe('HomeUniversalSearchComponent', () => {
  let component: HomeUniversalSearchComponent;
  let fixture: ComponentFixture<HomeUniversalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUniversalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUniversalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
