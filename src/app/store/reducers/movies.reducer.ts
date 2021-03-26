import { createReducer, on } from '@ngrx/store'
import { mockMovies } from '../../models/movie.model';

import { addToFavorite, removeFromFavorite } from '../actions/movies.actions'

export const initialState = mockMovies;

const _moviesReducer = createReducer(
  initialState,
  on(addToFavorite, (state, { id }) => {
    const index = state.findIndex(m => m.id === id)
    return index === -1
      ? state
      : [
        ...state.slice(0, index),
        {
          ...state[index],
          isFavorite: true
        },
        ...state.slice(index + 1)
      ]
  }),
  on(removeFromFavorite, (state, { id }) => {
    const index = state.findIndex(m => m.id === id)
    return index === -1
      ? state
      : [
        ...state.slice(0, index),
        {
          ...state[index],
          isFavorite: false
        },
        ...state.slice(index + 1)
      ]
  }),
)

export function moviesReducer(state, action) {
  return _moviesReducer(state, action)
}
