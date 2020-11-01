import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteClipboardButtonComponent } from './paste-clipboard-button.component';

describe('PasteClipboardButtonComponent', () => {
  let component: PasteClipboardButtonComponent;
  let fixture: ComponentFixture<PasteClipboardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteClipboardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteClipboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
