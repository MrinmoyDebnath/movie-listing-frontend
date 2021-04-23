import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: 'app-new-actor',
  templateUrl: './new-actor.component.html',
  styleUrls: ['./new-actor.component.css']
})
export class NewActorComponent implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {}
  sendData(data: any){
    console.log(data)

    const path:any = this.route.snapshot.paramMap;
    console.log(path)
    const actor = {
      name: data.name  || null,
      sex: data.sex || null,
      dob: data.dob  || null,
      bio: data.bio  || null
    }
    this.api.createActor(actor).subscribe(data=>{
      this.router.navigate([".."]);
    })
  }
  cancel(){
    this.router.navigate([".."]);
  }
}
