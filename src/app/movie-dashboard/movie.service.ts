// movie.service.ts

import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  updateMovie(updatedMovie: Movie): void {
    const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
    }
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
