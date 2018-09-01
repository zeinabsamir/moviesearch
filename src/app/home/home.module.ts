import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MovieService } from '../core/movie.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [SearchComponent],
  exports: [
    SearchComponent,
  ],
  providers: [
    MovieService
  ]
})
export class HomeModule { }
