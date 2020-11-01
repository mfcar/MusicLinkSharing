import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasteUrlBarComponent } from './layout/paste-url-bar/paste-url-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SpotifyTrackComponent } from './spotify/spotify-track/spotify-track.component';
import { SpotifyAlbumComponent } from './spotify/spotify-album/spotify-album.component';
import { SpotifyArtistComponent } from './spotify/spotify-artist/spotify-artist.component';
import { DeezerTrackComponent } from './deezer/deezer-track/deezer-track.component';
import { DeezerAlbumComponent } from './deezer/deezer-album/deezer-album.component';
import { DeezerArtistComponent } from './deezer/deezer-artist/deezer-artist.component';
import { AppleMusicTrackComponent } from './appleMusic/apple-music-track/apple-music-track.component';
import { AppleMusicAlbumComponent } from './appleMusic/apple-music-album/apple-music-album.component';
import { AppleMusicArtistComponent } from './appleMusic/apple-music-artist/apple-music-artist.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { CardTrackComponent } from './layout/card-track/card-track.component';
import { CardAlbumComponent } from './layout/card-album/card-album.component';
import { CardArtistComponent } from './layout/card-artist/card-artist.component';
import { CardShareLinkComponent } from './layout/card-share-link/card-share-link.component';
import { HomeLinkFinderComponent } from './home-link-finder/home-link-finder.component';
import { HomeUniversalSearchComponent } from './home-universal-search/home-universal-search.component';
import { LoadingIconComponent } from './layout/loading-icon/loading-icon.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShareButtonComponent } from './shared/components/share-button/share-button.component';
import { PasteClipboardButtonComponent } from './shared/components/paste-clipboard-button/paste-clipboard-button.component';
import { LoadingPanelComponent } from './shared/components/loading-panel/loading-panel.component';
import { ErrorPanelComponent } from './shared/components/error-panel/error-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    PasteUrlBarComponent,
    SpotifyTrackComponent,
    SpotifyAlbumComponent,
    SpotifyArtistComponent,
    DeezerTrackComponent,
    DeezerAlbumComponent,
    DeezerArtistComponent,
    AppleMusicTrackComponent,
    AppleMusicAlbumComponent,
    AppleMusicArtistComponent,
    CardTrackComponent,
    CardAlbumComponent,
    CardArtistComponent,
    CardShareLinkComponent,
    HomeLinkFinderComponent,
    HomeUniversalSearchComponent,
    LoadingIconComponent,
    ShareButtonComponent,
    PasteClipboardButtonComponent,
    LoadingPanelComponent,
    ErrorPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
