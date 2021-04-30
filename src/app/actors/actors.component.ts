import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

export class ActorsComponent implements OnInit {
  public actors: any | null;
  constructor(private api: ApiServiceService, private router: Router, private route: ActivatedRoute) {
    const path:any = this.route.snapshot.paramMap;
    if(path.params.name){
      const name = path.params.name
      this.api.getActorByName(name).subscribe(data=>{
        const result: any = data;
        this.actors = result.results;
      }, (error)=>{
        alert(error.error)
      })
    }
    else{
      this.api.getActors(1,10).subscribe(data=>{
        const result: any = data;
        this.actors = result.results;
      }, (error)=>{
        alert(error.error)
      })
    }
   }
  
  ngOnInit(): void {
  }
  newActor(){
    this.router.navigate(['/new-actor'])
  }
  gotoActor(name:any){
    this.router.navigate(['/movies',`actor/${name}`])
  }
}
