// movie-list.component.ts

import { Component } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovies();
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id);
  }
}
