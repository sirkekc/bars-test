import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie.model';

@Pipe({
    name: 'moviefilter',
    pure: false
})

export class MovieFilterPipe implements PipeTransform {
    transform(movies: Movie[], query: string): Movie[] {
        const lowerQuery = query.toLocaleLowerCase().trim();
        return movies.filter((movie: Movie) => {
            return movie.movieName.toLocaleLowerCase().includes(lowerQuery) ||
                movie.director.toLocaleLowerCase().includes(lowerQuery);
            });
    }
}