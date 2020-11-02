import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpotifyTrack} from '../../shared/models/spotify.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpotifyService} from '../../shared/services/spotify.service';
import {UrlBreakService} from '../../shared/services/url-break.service';
import * as linkify from 'linkifyjs';

@Component({
  selector: 'app-link-search-card',
  templateUrl: './link-search-card.component.html',
  styleUrls: ['./link-search-card.component.scss']
})
export class LinkSearchCardComponent implements OnInit {
  @Output() loading = new EventEmitter();
  @Output() resultSuccess = new EventEmitter();
  @Output() resultError = new EventEmitter();
  public track: SpotifyTrack | undefined;
  public searchingState = false;
  public hasResult = false;

  public formLinkSearch = new FormGroup({
    url: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
  });

  constructor(private spotifyService: SpotifyService, private urlBreak: UrlBreakService) {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.loading.emit('Verifying URL...');
    this.searchingState = true;
    if (linkify.test(this.formLinkSearch.controls.url.value)) {
      console.log('Breaking URL:');
      console.log(this.urlBreak.urlBreaking(this.formLinkSearch.controls.url.value));

      const url = this.urlBreak.urlBreaking(this.formLinkSearch.controls.url.value);
      const objectId = this.spotifyService.getTrackIdFromUrl(url?.pathname);

      this.spotifyService.getInfoByTrackId(objectId).subscribe((trackInfo) => {
        this.track = trackInfo;
        this.resultSuccess.emit('testing');
        this.searchingState = false;
      }, (error) => {
        console.log('Error:');
        console.log(error);
        this.resultError.emit(error.message);
        this.searchingState = false;
      });
    } else {
      this.resultError.emit('The value is not a valid URL.');
      this.searchingState = false;
    }
  }
}
