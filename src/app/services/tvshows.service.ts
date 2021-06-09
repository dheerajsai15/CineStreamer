import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies';

const enum endpoint{
  top_rated = '/tv/top_rated',
  popular = '/tv/popular',
  air_today = '/tv/airing_today',
  trending = '/tv/on_the_air'
}

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  private tmdb = 'https://api.themoviedb.org/3';
  private api_key = environment.api;

  constructor(private http : HttpClient) { 
  }
  getTopRated(): Observable<Movies>{
    return this.http.get<Movies>(this.tmdb + endpoint.top_rated,{
      params: {
        api_key: this.api_key
      }
    });
  }
  getPopularShows(): Observable<Movies>{
    return this.http.get<Movies>(this.tmdb+endpoint.popular,{
      params: {
        api_key: this.api_key
      }
    });
  }
  getLatestShows(): Observable<Movies>{
    return this.http.get<Movies>(this.tmdb+endpoint.air_today,{
      params: {
        api_key: this.api_key
      }
    });
  } 
  getTrending(): Observable<Movies>{
    return this.http.get<Movies>(this.tmdb+endpoint.trending,{
      params: {
        api_key: this.api_key
      }
    });
  } 
}
