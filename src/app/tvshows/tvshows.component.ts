import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from '../models/movies';
import { TvshowsService } from '../services/tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TVShowsComponent implements OnInit,OnDestroy {
  topRated: Movies;
  popular: Movies;
  latest: Movies;
  trending: Movies;
  subs: Subscription[]=[];
  sliderConfig = {
    slidesToShow: 9,
    sliderToScroll: 2,
    arrows: true,
    autoplay: false
  };

  constructor(private movie: TvshowsService) { }

  ngOnInit(): void {
    this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this.movie.getPopularShows().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getLatestShows().subscribe(data => this.latest = data));
    this.subs.push(this.movie.getTrending().subscribe(data => this.trending = data));
  }
  ngOnDestroy(): void{
    this.subs.map(s => s.unsubscribe())
  }
}
