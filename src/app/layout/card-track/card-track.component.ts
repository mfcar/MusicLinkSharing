import {Component, Input} from '@angular/core';
import {Track} from '../../shared/models/track.model';

@Component({
  selector: 'app-card-track',
  templateUrl: './card-track.component.html',
  styleUrls: ['./card-track.component.scss']
})
export class CardTrackComponent {
  @Input() track: Track | undefined;

  constructor() { }
}
