import {Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paste-clipboard-button',
  templateUrl: './paste-clipboard-button.component.html',
  styleUrls: ['./paste-clipboard-button.component.scss']
})
export class PasteClipboardButtonComponent implements OnInit {
  public showButton = false;
  public clipboardContent = '';
  @Output() urlPasted = new EventEmitter();

  ngOnInit(): void {
    if (navigator.clipboard) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  clickPasteFromClipboard(): void {
    navigator.clipboard.readText()
      .then(text => {
        this.clipboardContent = text;
        this.urlPasted.emit(this.clipboardContent);
      })
      .catch(error => {
        console.log(`Error on get text from clipboard:\n${error}`);
      });
  }
}
