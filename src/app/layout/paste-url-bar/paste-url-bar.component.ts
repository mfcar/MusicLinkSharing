import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpotifyService} from '../../shared/services/spotify.service';
import {SpotifyTrack} from '../../shared/models/spotify.model';
import {UrlBreakService} from '../../shared/services/url-break.service';

@Component({
  selector: 'app-paste-url-bar',
  templateUrl: './paste-url-bar.component.html',
  styleUrls: ['./paste-url-bar.component.scss']
})
export class PasteUrlBarComponent implements OnInit {
  public track: SpotifyTrack | undefined;

  public formUrlBreaker = new FormGroup({
    url: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
  });

  constructor(private spotifyService: SpotifyService, private urlBreak: UrlBreakService) {
  }

  ngOnInit(): void {
  }

  breakUrl(): void {
    console.log('Breaking URL:');
    console.log(this.urlBreak.urlBreaking(this.formUrlBreaker.controls.url.value));

    const url = this.urlBreak.urlBreaking(this.formUrlBreaker.controls.url.value);
    const objectId = this.spotifyService.getTrackIdFromUrl(url?.pathname);

    this.spotifyService.getInfoByTrackId(objectId).subscribe((trackInfo) => {
      this.track = trackInfo;
    });
  }

}
