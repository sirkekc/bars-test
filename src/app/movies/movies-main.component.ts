import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MoviesMainService } from './movies-main.service';

@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.scss']
})
export class MoviesMainComponent implements OnInit {

  public movies: Movie[];

  constructor(
    private service: MoviesMainService
  ) {
  }

  ngOnInit(): void {
    this.service.getMovies()
      .subscribe((movies: Movie[]) => {
        this.movies = movies;
    });
  }
}
