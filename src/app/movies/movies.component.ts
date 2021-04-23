import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiServiceService } from "../api-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: any | null;
  public closeResult = '';
  constructor(private api: ApiServiceService, private route: ActivatedRoute, private router: Router) {}
  
  openEdit(movie: any){
    this.router.navigate(['/edit', movie])
  }
  ngOnInit(): void {
    const path:any = this.route.snapshot.paramMap;
    if(path.params.id){
      const type = path.params.id.split('/')[0]
      const name = path.params.id.split('/')[1]
      console.log(type, name)
      if(type==='actor'){
        this.api.getMoviesOfActor(name, 1, 10).subscribe(data=>{
          const result:any = data;
          this.movies = result.results;
        })
      }else if(type==='producer'){
        this.api.getMoviesOfProducer(name, 1, 10).subscribe(data=>{
          const result:any = data;
          this.movies = result.results;
        })
      }else{
        this.api.getMovieByName(type).subscribe(data=>{
          console.log(data)
          const result:any = data;
          this.movies = result.results;
        })
      }
    }
    else{
      this.api.getMovies(1,10).subscribe(data=>{
        const result:any = data;
        this.movies = result.results;
      })
    }
  }
  createMovie(){
    this.router.navigate(['/new-movie']);
  }
}
