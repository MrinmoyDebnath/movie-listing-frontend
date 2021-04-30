import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-producer',
  templateUrl: './new-producer.component.html',
  styleUrls: ['./new-producer.component.css']
})
export class NewProducerComponent implements OnInit {

  constructor(private api: ApiServiceService, private location: Location) { }
  ngOnInit(): void {}
  sendData(data: any){
    const producer = {
      name: btoa(data.name)  || null,
      sex: btoa(data.sex) || null,
      dob: btoa(data.dob)  || null,
      bio: btoa(data.bio)  || null
    }
    this.api.createProducer(producer).subscribe(data=>{
      this.location.back();
    }, (error)=>{
      alert(error.error)
    })
  }
  cancel(){
    this.location.back();
  }
}
