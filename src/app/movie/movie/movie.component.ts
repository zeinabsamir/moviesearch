import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/movie.service';
import { Movie } from '../../shared/model/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 
  movieDetails: Movie;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const imdbID = params.id;
      this.movieService.getMovieDetails(imdbID).subscribe((data) => {
          this.movieDetails = data;
          console.log(data);
      });
    });
  }


}
