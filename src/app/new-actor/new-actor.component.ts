import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-new-actor',
  templateUrl: './new-actor.component.html',
  styleUrls: ['./new-actor.component.css']
})
export class NewActorComponent implements OnInit {

  constructor(private api: ApiServiceService, private location: Location) { }

  ngOnInit(): void {}
  sendData(data: any){
    const actor = {
      name: btoa(data.name)  || null,
      sex: btoa(data.sex) || null,
      dob: btoa(data.dob)  || null,
      bio: btoa(data.bio)  || null
    }
    return this.api.createActor(actor).subscribe(data=>{
              this.location.back();
            }, (error)=>{
              alert(error.error)
            })
  }
  cancel(){
    this.location.back();
  }
}
