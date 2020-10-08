import {Injectable} from '@angular/core';
import {MusicService} from '../models/music-service.enum';
import {ObjectType} from '../models/object-type.enum';

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

  public getMusicServiceFromUrl(origin: string): MusicService {
    if (origin.includes('spotify')) {
      return MusicService.Spotify;
    }

    if (origin.includes('spotify')) {
      return MusicService.Spotify;
    }

    if (origin.includes('spotify')) {
      return MusicService.Spotify;
    }

    return MusicService.NotSupported;
  }
}
