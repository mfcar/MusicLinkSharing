import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSearchCardComponent } from './link-search-card.component';

describe('LinkSearchCardComponent', () => {
  let component: LinkSearchCardComponent;
  let fixture: ComponentFixture<LinkSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSearchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
