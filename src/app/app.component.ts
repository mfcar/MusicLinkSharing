import {Component, OnInit} from '@angular/core';
import {StorageService} from './shared/services/storage.service';
import {SpotifyService} from './shared/services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MusicLinkSharing';

  constructor(private storageService: StorageService, private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.createSpotifyAuthToken();
  }

  createSpotifyAuthToken(): void {
    this.spotifyService.getAuthTokenSpotify().subscribe((spotifyToken) => {
      this.storageService.setJsonLocalStorage('spotifyKey', spotifyToken);
    }, (error) => {
      console.log('Error getting spotify API:');
      console.log(error);
    });
  }
}
