import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {
  public producers: any | null;
  constructor(private api: ApiServiceService, private router: Router, private route: ActivatedRoute) {
    const path:any = this.route.snapshot.paramMap;
    if(path.params.name){
      console.log(path.params.name)
      const name = path.params.name
      this.api.getProducerByName(name).subscribe(data=>{
        const result: any = data;
        this.producers = result.results;
        console.log(data)
      })
    }
    else{
      this.api.getProducers(1,10).subscribe(data=>{
        const result: any = data;
        this.producers = result.results;
      })
    }
   }
  
  ngOnInit(): void {
  }
  createProducer(){
    this.router.navigate(['/new-producer']);
  }
  gotoProducer(name:any){
    this.router.navigate(['/movies',`producer/${name}`])
  }
}
