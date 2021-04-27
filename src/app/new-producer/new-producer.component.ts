import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-producer',
  templateUrl: './new-producer.component.html',
  styleUrls: ['./new-producer.component.css']
})
export class NewProducerComponent implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute,  private router: Router, private location: Location) { }
  ngOnInit(): void {}
  sendData(data: any){
    
    const path:any = this.route.snapshot.paramMap;
    const producer = {
      name: data.name  || null,
      sex: data.sex || null,
      dob: data.dob  || null,
      bio: data.bio  || null
    }
    this.api.createProducer(producer).subscribe(data=>{
      this.location.back();
    })
  }
  cancel(){
    this.location.back();
  }
}
