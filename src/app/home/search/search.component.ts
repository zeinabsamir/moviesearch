import { Component, ViewChild, OnInit } from '@angular/core';
import { MovieService } from '../../core/movie.service';
import { Movie } from '../../shared/model/movie.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('myInputText') inputText;

  searchStr: string;
  searchRes: Movie;
  movies = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
   this.showMovie();
  }

  searchMovie() {
     this.movieService.searchMovie(this.searchStr)
     .subscribe(res => {
      this.searchRes = res;
       if (this.inputText.nativeElement.value === '') {
        this.showMovie();
        this.searchRes = null;
       }
       console.log(res);
     });
  }

  showMovie() {
    this.movieService.searchMovie('Batman').subscribe(res => {
      this.movies.push(res);
      console.log(res);
      console.log(this.movies);
    });
    this.movieService.searchMovie('Inception').subscribe(res => {
      this.movies.push(res);
      console.log(res);
      console.log(this.movies);
    });
    this.movieService.searchMovie('Guardians of the Galaxy').subscribe(res => {
      this.movies.push(res);
      console.log(res);
      console.log(this.movies);
    });
    this.movieService.searchMovie('avengers').subscribe(res => {
      this.movies.push(res);
      console.log(res);
      console.log(this.movies);
    });
    this.movieService.searchMovie('blended').subscribe(res => {
      this.movies.push(res);
      console.log(res);
      console.log(this.movies);
    });
    this.movieService.searchMovie('the meg').subscribe(res => {
      this.movies.push(res);
      console.log(res);
      console.log(this.movies);
    });
  }
}
