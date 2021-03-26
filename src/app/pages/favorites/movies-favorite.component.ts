import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMoviesFavorite } from '../../store/selectors/movies.selector'


@Component({
  selector: 'app-movies-favorite',
  templateUrl: './movies-favorite.component.html',
  styleUrls: ['./movies-favorite.component.scss'],
})
export class MoviesFavoriteComponent implements OnInit {
  movies$: Observable<Movie[]>

  constructor(private store: Store<{ movies: Movie[] }>) {
    this.movies$ = store.select(selectMoviesFavorite)
  }

  ngOnInit () {}
}
