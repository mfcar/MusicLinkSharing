import {MusicService} from '../../shared/models/music-service.enum';

export interface ServiceShareLinkCard {
  streamingService: MusicService;
  text: string;
  url: string;
}
