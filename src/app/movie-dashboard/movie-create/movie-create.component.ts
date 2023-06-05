// movie-create.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent {
  movie: Movie = {
    id: 0,
    title: '',
    director: '',
    releaseYear: 0
  };

  constructor(
    private router: Router,
    private movieService: MovieService
  ) {}

  createMovie(): void {
    this.movieService.addMovie(this.movie);
    this.router.navigate(['/movies']);
  }
}
