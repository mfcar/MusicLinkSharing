import {Injectable} from '@angular/core';
import {MusicService} from '../models/music-service.enum';

@Injectable({
  providedIn: 'root'
})
export class UrlBreakService {

  constructor() { }

  public urlBreaking(url: string): URL | null {
    let urlObject;
    try {
      urlObject = new URL(url);
    } catch (error) {
      return null;
    }

    return urlObject;
  }

  public getMusicServiceFromUrl(origin: string | undefined): MusicService {
    if (origin?.includes('spotify')) {
      return MusicService.Spotify;
    }

    if (origin?.includes('apple')) {
      return MusicService.AppleMusic;
    }

    if (origin?.includes('deezer')) {
      return MusicService.Deezer;
    }

    return MusicService.NotSupported;
  }
}
