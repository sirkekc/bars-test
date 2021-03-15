import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockMovies, Movie } from './movie.model';

@Injectable()
export class MoviesMainService {

  constructor() {}

  public getMovies(): Observable<Movie[]> {
    return of(mockMovies);
  }
}
