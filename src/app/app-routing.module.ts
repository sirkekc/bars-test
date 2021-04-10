import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesMainComponent } from './movies/movies-main.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesMainComponent
  },
  {
    path: 'favourites',
    component: MoviesMainComponent
  },
  {
    path: '**',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
