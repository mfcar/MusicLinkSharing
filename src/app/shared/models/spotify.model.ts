export interface SpotifyAlbumSimplified {
  album_group: string;
  album_type: string;
  artists: SpotifyArtistSimplified[];
  available_markets: string[];
  external_urls: any;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
}

export interface SpotifyArtistSimplified {
  external_urls: any;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

export interface SpotifyRestriction {
  reason: string;
}

export interface SpotifyTrack {
  album: SpotifyAlbumSimplified;
  artists: SpotifyArtistSimplified[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: any;
  external_urls: any;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: SpotifyTrackLink;
  restrictions: SpotifyRestriction[];
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface SpotifyTrackLink {
  external_urls: any;
  href: string;
  id: string;
  type: string;
  uri: string;
}
