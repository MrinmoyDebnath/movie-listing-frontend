import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { ProducersComponent } from './producers/producers.component';
import { ActorsComponent } from './actors/actors.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { NewActorComponent } from './new-actor/new-actor.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewProducerComponent } from './new-producer/new-producer.component';

const material = [
  MatDialogModule
]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MoviesComponent,
    ProducersComponent,
    ActorsComponent,
    HomepageComponent,
    EditDialogComponent,
    NewActorComponent,
    NewMovieComponent,
    NewProducerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    material
  ],
  entryComponents:[
    EditDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
