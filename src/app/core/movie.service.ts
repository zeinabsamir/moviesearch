import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

 private searchUrl: string;

  constructor(private http: Http) { }

  searchMovie(name: string) {
     this.searchUrl = `http://www.omdbapi.com/?apikey=49a0d963&t=${name}&r=json`;
     return this.http.get(  this.searchUrl)
     .pipe(map((response: any) => response.json()));
  }
  getMovieDetails(imdbId: string) {
    this.searchUrl = `http://www.omdbapi.com/?i=${imdbId}&apikey=49a0d963&r=json`;
    return this.http.get(  this.searchUrl)
    .pipe(map((response: any) => response.json()));
  }
}
