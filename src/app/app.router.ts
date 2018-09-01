import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './home/search/search.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie/movie.component';


export const rootRouting: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'movie/:id',
        component: MovieComponent
    }
  ]);
