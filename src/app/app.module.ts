import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainModule } from 'src/app/main/main.module';
import { AboutComponent } from './about/about.component';
import { HomeModule } from './home/home.module';
import { rootRouting } from './app.router';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    HomeModule,
    MovieModule,
    rootRouting
  ],
  exports: [
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
