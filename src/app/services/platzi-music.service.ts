import { Injectable } from '@angular/core';

import dataArtists from './artists.json';

@Injectable({
  providedIn: 'root',
})
export class PlatziMusicService {
  
  constructor() {}

  getArtists() {
    return dataArtists.items;
  }

  getNewReleases() {
    return fetch(
      'https://platzi-music-api.herokuapp.com/browse/new-releases'
    ).then((response) => response.json());
  }

  getArtistTopTracks(artistId) {
    return fetch(
      `https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`
    ).then((response) => response.json());
  }
  getAlbumTracks(albumId) {
    return fetch(
      `https://platzi-music-api.herokuapp.com/albums/${albumId}/tracks?country=CO`
    ).then((response) => response.json());
  }
  searchTracks(text) {
    return fetch(
      `https://platzi-music-api.herokuapp.com/search?q=${text}&type=track`
    ).then((response) => response.json());
  }
}
