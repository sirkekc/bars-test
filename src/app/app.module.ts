import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesMainComponent } from './movies/movies-main.component';
import { MovieComponent } from './movies/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesMainComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
