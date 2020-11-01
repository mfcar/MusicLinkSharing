import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as linkify from 'linkifyjs';

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
    this.showButton = !!navigator.clipboard;
  }

  clickPasteFromClipboard(): void {
    navigator.clipboard.readText()
      .then(text => {
        if (linkify.test(text)) {
          this.clipboardContent = text;
          this.urlPasted.emit(this.clipboardContent);
        }
      })
      .catch(error => {
        console.log(`Error on get text from clipboard:\n${error}`);
      });
  }
}
