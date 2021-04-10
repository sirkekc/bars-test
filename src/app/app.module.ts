import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesMainComponent } from './movies/movies-main.component';
import { MovieComponent } from './movies/movie/movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieFilterPipe } from './movies/movie-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesMainComponent,
    MovieComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MovieFilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
