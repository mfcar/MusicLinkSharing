import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpotifyTrack} from '../models/spotify.model';
import {environment} from '../../../environments/environment';
import {StorageService} from './storage.service';
import {Token} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) {
  }

  getAuthTokenSpotify(): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(environment.spotifyClientId + ':' + environment.spotifyClientSecret)
    });

    const params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    const body = params.toString();

    return this.httpClient.post<string>('https://accounts.spotify.com/api/token', body, {headers});
  }

  getInfoByTrackId(trackId: string): Observable<SpotifyTrack> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.storageService.getJsonLocalStorage<Token>('spotifyKey').access_token
    });
    return this.httpClient.get<SpotifyTrack>(`https://api.spotify.com/v1/tracks/${trackId}`, {headers});
  }
}
