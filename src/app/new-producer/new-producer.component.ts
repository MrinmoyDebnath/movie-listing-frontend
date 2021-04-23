import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-new-producer',
  templateUrl: './new-producer.component.html',
  styleUrls: ['./new-producer.component.css']
})
export class NewProducerComponent implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute,  private router: Router) { }
  ngOnInit(): void {}
  sendData(data: any){
    console.log(data)

    const path:any = this.route.snapshot.paramMap;
    console.log(path)
    const producer = {
      name: data.name  || null,
      sex: data.sex || null,
      dob: data.dob  || null,
      bio: data.bio  || null
    }
    this.api.createProducer(producer).subscribe(data=>{
      console.log(data)
      this.router.navigate([".."]);
    })
  }
  cancel(){
    this.router.navigate([".."]);
  }
}
