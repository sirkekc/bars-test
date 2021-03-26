import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from '../../models/movie.model';
import { addToFavorite, removeFromFavorite } from '../../store/actions/movies.actions';
import { selectMoviesSorted } from '../../store/selectors/movies.selector'


@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.scss'],
})
export class MoviesMainComponent implements OnInit {
  searchField = new FormControl('');
  movies$: Observable<Movie[]>;
  movies: Movie[];
  filteredMovies: Movie[];

  constructor(private store: Store<{ movies: Movie[] }>) {
    this.movies$ = store.select(selectMoviesSorted)
  }

  filterMovies (movies: Movie[], search: string) {
    return movies.filter(m => m.movieName.indexOf(search) !==-1)
  }

  addToFavorite (id) {
    this.store.dispatch(addToFavorite({id}))
  }

  removeFromFavorite (id) {
    this.store.dispatch(removeFromFavorite({id}))
  }

  ngOnInit(): void {
    this.movies$.subscribe(value => {
      this.movies = value
      this.filteredMovies = this.filterMovies(value, this.searchField.value)
    })

    this.searchField.valueChanges.subscribe(value => {
      this.filteredMovies = this.filterMovies(this.movies, value)
    });
  }
}
