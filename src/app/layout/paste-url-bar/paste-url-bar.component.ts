import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpotifyService} from '../../shared/services/spotify.service';
import {SpotifyTrack} from '../../shared/models/spotify.model';

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

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  breakUrl(): void {
    console.log('Breaking URL:');
    console.log('URL: ' + this.formUrlBreaker.controls.url.value);
    this.spotifyService.getInfoByTrackId('20I6sIOMTCkB6w7ryavxtO').subscribe((trackInfo) => {
      this.track = trackInfo;
    });
  }

}
