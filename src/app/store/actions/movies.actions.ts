import { createAction, props } from '@ngrx/store'

export const addToFavorite = createAction('[Movie] Add To Favorite', props<{id: Number}>())
export const removeFromFavorite = createAction('[Movie] Remove From Favorite', props<{id: Number}>())
