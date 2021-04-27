import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ApiServiceService } from "../api-service.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-actor',
  templateUrl: './new-actor.component.html',
  styleUrls: ['./new-actor.component.css']
})
export class NewActorComponent implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute,  private router: Router, private location: Location) { }

  ngOnInit(): void {}
  sendData(data: any){
    
    const path:any = this.route.snapshot.paramMap;
    const actor = {
      name: data.name  || null,
      sex: data.sex || null,
      dob: data.dob  || null,
      bio: data.bio  || null
    }
    this.api.createActor(actor).subscribe(data=>{
      this.location.back();
    })
  }
  cancel(){
    this.location.back();
  }
}
