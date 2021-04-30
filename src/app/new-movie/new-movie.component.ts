import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor(private api: ApiServiceService, private location: Location) { }
  ngOnInit(): void {}
  sendData(data: any){
    const movie = {
      name: btoa(data.movie)  || null,
      plot: btoa(data.plot)  || null,
      poster: btoa(data.poster)  || null,
      producer: btoa(data.producer) || null,
      actors: data.actors.split(',')[0]!==''? data.actors.split(',').map((actor:string)=>btoa(actor)) : null 
    }
    this.api.createMovie(movie).subscribe(data=>{
      this.location.back();
    }, (error)=>{
      alert(error)
    })
  }
  cancel(){
    this.location.back();
  }

}
