import { createSelector } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';

export const selectMovies = (state) => state.movies;

export const selectMoviesSorted = createSelector(
  selectMovies,
  (state: Movie[]) => [...state].sort((a, b) => b.rating - a.rating)
);

export const selectMoviesFavorite = createSelector(
  selectMovies,
  selectMoviesSorted,
  (state: Movie[]) => state.filter(m => m.isFavorite)
);
