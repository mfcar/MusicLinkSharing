import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCalloutComponent } from './info-callout.component';

describe('InfoCalloutComponent', () => {
  let component: InfoCalloutComponent;
  let fixture: ComponentFixture<InfoCalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCalloutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
