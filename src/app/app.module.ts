import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer } from '@ngrx/store';

import { environment } from '../environments/environment'
import { moviesReducer } from './store/reducers/movies.reducer';
import { hydrationMetaReducer } from './store/reducers/hydration.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { MoviesMainComponent } from './pages/movies/movies-main.component';
import { MoviesFavoriteComponent } from './pages/favorites/movies-favorite.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesMainComponent,
    MovieComponent,
    MoviesFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      movies: moviesReducer,
    },
    {
      metaReducers: [hydrationMetaReducer]
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
