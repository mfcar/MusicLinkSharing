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
    AppleMusicArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
