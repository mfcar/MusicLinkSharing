import {MusicService} from '../../shared/models/music-service.enum';

export interface TrackInfoCard {
  streamingService: MusicService;
  albumArtworkUrl: string;
  trackName: string;
  albumName: string;
  artist: string;
  explicit: boolean;
  releaseYear: number;
  duration: number;
}
