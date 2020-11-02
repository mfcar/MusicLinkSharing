import {Component, Input, OnInit} from '@angular/core';
import {ServiceShareLinkCard} from './service-share-link-card.model';

@Component({
  selector: 'app-service-share-link-card',
  templateUrl: './service-share-link-card.component.html',
  styleUrls: ['./service-share-link-card.component.scss']
})
export class ServiceShareLinkCardComponent implements OnInit {
  @Input() shareLink: ServiceShareLinkCard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
