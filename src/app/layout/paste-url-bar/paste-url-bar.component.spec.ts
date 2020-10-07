import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteUrlBarComponent } from './paste-url-bar.component';

describe('PasteUrlBarComponent', () => {
  let component: PasteUrlBarComponent;
  let fixture: ComponentFixture<PasteUrlBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteUrlBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteUrlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
