import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceShareLinkCardComponent } from './service-share-link-card.component';

describe('ServiceShareLinkCardComponent', () => {
  let component: ServiceShareLinkCardComponent;
  let fixture: ComponentFixture<ServiceShareLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceShareLinkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceShareLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
