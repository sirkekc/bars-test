import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MoviesMainService } from './movies-main.service';
import { map } from 'rxjs/operators'
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.scss']
})
export class MoviesMainComponent implements OnInit, OnDestroy {

  public movies$: Subscription;
  public movies: Movie[];
  public searchForm: FormGroup;

  constructor(
    private service: MoviesMainService,
    private route: ActivatedRoute
  ) {
    this.searchForm = new FormGroup({
      query: new FormControl('')
    });
  }

  ngOnInit(): void {
    const favMoviesIdList: string[] = this.service.getFavMoviesIdList();
    this.movies$ = this.service.getMovies()
      .pipe(
        map((movies: Movie[]) => {
          movies.sort((a: Movie, b: Movie) => {
            return b.rating - a.rating
          });
          movies.map((movie: Movie) => {
            movie.fav = favMoviesIdList.indexOf(movie.uid) > -1;
            return movie;
          })
          return movies;
        })
      ).subscribe((movies: Movie[]) => {
        this.movies = movies;
    });

    this.route.url.subscribe(url => {
      if (url[0].path === 'favourites') {
        this.movies = this.movies.filter(movie => movie.fav);
      }
    });
  }

  ngOnDestroy(): void {
    this.movies$.unsubscribe();
  }
}
