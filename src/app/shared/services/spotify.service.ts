import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpotifyTrack} from '../models/spotify.model';
import {environment} from '../../../environments/environment';
import {StorageService} from './storage.service';
import {Token} from '../models/auth.model';
import {ObjectType} from '../models/object-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) {
  }

  public getAuthTokenSpotify(): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(environment.spotifyClientId + ':' + environment.spotifyClientSecret)
    });

    const params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    const body = params.toString();

    return this.httpClient.post<string>('https://accounts.spotify.com/api/token', body, {headers});
  }

  public getInfoByTrackId(trackId: string): Observable<SpotifyTrack> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.storageService.getJsonLocalStorage<Token>('spotifyKey').access_token
    });
    return this.httpClient.get<SpotifyTrack>(`https://api.spotify.com/v1/tracks/${trackId}`, {headers});
  }

  public getObjectTypeFromUrl(pathName: string): ObjectType {
    if (pathName.includes('track')) {
      return ObjectType.Track;
    }

    if (pathName.includes('album')) {
      return ObjectType.Album;
    }

    if (pathName.includes('artist')) {
      return ObjectType.Artist;
    }

    return ObjectType.Other;
  }

  public getTrackIdFromUrl(pathName: string | undefined): string {
    console.log(pathName);
    const parameters = pathName?.split('/');
    console.log(parameters);
    if (parameters !== undefined && parameters.length === 2){
      return parameters[2];
    } else {
      return '';
    }
  }

  public getAlbumIdFromUrl(pathName: string): string {
    const parameters = pathName.split('/');
    return parameters[1];

  }

  public getArtistIdFromUrl(pathName: string): string {
    const parameters = pathName.split('/');
    return parameters[1];
  }
}
