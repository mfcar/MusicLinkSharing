import {Component, Input, OnInit} from '@angular/core';
import {TrackInfoCard} from './track-info-card.model';

@Component({
  selector: 'app-track-info-card',
  templateUrl: './track-info-card.component.html',
  styleUrls: ['./track-info-card.component.scss']
})
export class TrackInfoCardComponent implements OnInit {
  @Input() trackInfo: TrackInfoCard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
