import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TVShowsComponent} from './tvshows/tvshows.component';
import {MoviesComponent} from './movies/movies.component';
import {LatestComponent} from './latest/latest.component';
import {MyListComponent} from './my-list/my-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'tvshows',component:TVShowsComponent},
  {path:'movies',component:MoviesComponent},
  {path:'latest',component:LatestComponent},
  {path:'mylist',component:MyListComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
