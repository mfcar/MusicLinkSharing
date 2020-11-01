import { Component, OnInit } from '@angular/core';
import {SpotifyTrack} from '../../models/spotify.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpotifyService} from '../../services/spotify.service';
import {UrlBreakService} from '../../services/url-break.service';

@Component({
  selector: 'app-link-search-card',
  templateUrl: './link-search-card.component.html',
  styleUrls: ['./link-search-card.component.scss']
})
export class LinkSearchCardComponent implements OnInit {
  public track: SpotifyTrack | undefined;
  public searchingState = false;
  public hasResult = false;

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
    this.searchingState = true;
    console.log('Breaking URL:');
    console.log(this.urlBreak.urlBreaking(this.formUrlBreaker.controls.url.value));

    const url = this.urlBreak.urlBreaking(this.formUrlBreaker.controls.url.value);
    const objectId = this.spotifyService.getTrackIdFromUrl(url?.pathname);

    this.spotifyService.getInfoByTrackId(objectId).subscribe((trackInfo) => {
      this.track = trackInfo;
    }, (error) => {
      console.log('Error:');
      console.log(error);
      this.searchingState = false;
    }, () => {
      this.searchingState = false;
    });
  }

  receiverUrlPasted(url: string): void {
    console.log('Url pasted:');
    console.log(url);
    window.alert(url);
  }

}
