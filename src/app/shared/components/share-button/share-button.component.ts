import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss']
})
export class ShareButtonComponent {
  @Input() title = 'WebShare API';
  @Input() text = '';
  @Input() url = location.href;

  clickShare(): void {
    navigator.share({
      title: this.title,
      text: this.text,
      url: this.url
    })
      .then(_ => {
        console.log('Shared');
      })
      .catch(error => {
        console.log(`Not shared, error:\n${error}`);
      });
  }
}
