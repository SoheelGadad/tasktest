import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!isNaN(id)) {
      this.movie = this.movieService.getMovie(id);
    }
  }
  
  updateMovie(): void {
    if (this.movie) {
      this.movieService.updateMovie(this.movie);
      this.router.navigate(['/movies']);
    }
  }
}
