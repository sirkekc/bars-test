import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesMainComponent } from './pages/movies/movies-main.component';
import { MoviesFavoriteComponent } from './pages/favorites/movies-favorite.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MoviesMainComponent
  },
  {
    path: 'favourites',
    component: MoviesFavoriteComponent
  },
  {
    path: '**',
    redirectTo: 'movie'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
