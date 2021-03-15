import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesMainComponent } from './movies/movies-main.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MoviesMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
