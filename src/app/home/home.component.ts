import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from '../models/movies';
import { MovieService } from '../services/movie.service';
import { TvshowsService } from '../services/tvshows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  subs: Subscription[]=[];
  trending: Movies;
  popular: Movies;
  topRated: Movies;
  topRatedShows: Movies;
  trendingShows: Movies;
  headerBGUrl: string;

  sliderConfig = {
    slidesToShow: 9,
    sliderToScroll: 2,
    arrows: true,
    autoplay: false
  };


  constructor(private movie: MovieService,private shows:TvshowsService) { }

  ngOnInit(): void{
    this.subs.push(this.movie.getTrending().subscribe(data =>{ 
    this.trending = data;
    //this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[4].backdrop_path;
   }));
  this.subs.push(this.movie.getPopularMovies().subscribe(data => this.popular = data));
  this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
  this.subs.push(this.shows.getTopRated().subscribe(data => this.topRatedShows = data));
  this.subs.push(this.shows.getTrending().subscribe(data => this.trendingShows = data));
 }
 ngOnDestroy(): void{
  this.subs.map(s => s.unsubscribe())
}

}
