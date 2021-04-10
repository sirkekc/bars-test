import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesMainService } from '../movies-main.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;

  constructor(private service: MoviesMainService) {}

  public alertCall(event: Event, descr: string): void {
    event.stopPropagation();
    alert(descr);
  }

  public favToggle(event: Event, movie: Movie): void {
    event.stopPropagation();
    movie.fav = !movie.fav;
    this.service.toggleFavMovies(movie.uid, movie.fav);
  }
}
