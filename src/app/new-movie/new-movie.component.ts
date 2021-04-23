import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute,  private router: Router) { }
  ngOnInit(): void {}
  sendData(data: any){
    console.log(data)

    const path:any = this.route.snapshot.paramMap;
    console.log(path)
    const movie = {
      name: data.movie  || null,
      plot: data.plot  || null,
      poster: data.poster  || null,
      producer: data.producer || null,
      actors: data.actors.split(',')[0]!==''? data.actors.split(',') : null 
    }
    this.api.createMovie(movie).subscribe(data=>{
      console.log(data)
      this.router.navigate([".."]);
    })
  }
  cancel(){
    this.router.navigate([".."]);
  }

}
