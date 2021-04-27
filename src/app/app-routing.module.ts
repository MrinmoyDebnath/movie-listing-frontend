import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './actors/actors.component';
import { MoviesComponent } from './movies/movies.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProducersComponent } from "./producers/producers.component";
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { NewActorComponent } from './new-actor/new-actor.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewProducerComponent } from './new-producer/new-producer.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/:id',
    component: MoviesComponent
  },
  {
    path: 'movies/movie/:id',
    component: MoviesComponent
  },
  {
    path: 'actors',
    component: ActorsComponent
  },
  {
    path: 'actors/:name',
    component: ActorsComponent
  },
  {
    path: 'producers/:name',
    component: ProducersComponent
  },
  {
    path: 'producers',
    component: ProducersComponent
  },
  {
    path: 'edit/:movie',
    component: EditDialogComponent
  },
  {
    path: 'new-actor',
    component: NewActorComponent
  },
  {
    path: 'new-movie',
    component: NewMovieComponent
  },
  {
    path: 'new-producer',
    component: NewProducerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
