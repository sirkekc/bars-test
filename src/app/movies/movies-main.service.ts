import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockMovies, Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesMainService {
  private LS_LABEL = 'favMoviesIdList';
  private favMoviesList: string[] = [];
  constructor() {}

  public getMovies(): Observable<Movie[]> {
    return of(mockMovies);
  }

  public getFavMoviesIdList(): string[] {
    this.favMoviesList = JSON.parse(localStorage.getItem('favMoviesIdList'));
    return this.favMoviesList;
  }

  private saveFavMoviesIdList(idList: string[]): void {
    localStorage.setItem(this.LS_LABEL, JSON.stringify(idList));
  }

  public toggleFavMovies(movieUid: string, movieFav: boolean): void {
    const movieIndex = this.favMoviesList.indexOf(movieUid)
    const movieSaved = movieIndex > -1;
    if (movieFav) {
      if (!movieSaved) {
        this.favMoviesList.push(movieUid);
        this.saveFavMoviesIdList(this.favMoviesList);
      }
    } else {
      if (movieSaved) {
        this.favMoviesList.splice(movieIndex, 1);
        this.saveFavMoviesIdList(this.favMoviesList);
      }
    }
  }
}
