import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;
  @Output() addToFavorite = new EventEmitter();
  @Output() removeFromFavorite = new EventEmitter();

  toggleFavorite (event: Event) {
    event.stopPropagation()
    if (this.movie.isFavorite) {
      this.removeFromFavorite.emit()
    } else {
      this.addToFavorite.emit()
    }
  }

  alertCall(event: Event, descr: string): void {
    event.stopPropagation()
    alert(descr);
  }
}
