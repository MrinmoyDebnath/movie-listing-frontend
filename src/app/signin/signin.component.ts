import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute,  private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  createAccount(data: any){
    
    const user = {
      username: data.name  || null,
      email: data.email || null,
      password: data.password  || null
    }
    this.api.createAccount(user).subscribe(data=>{
      console.log(data)
    })
  }
  saveToken(token: string){
    localStorage.setItem('token', token);
  }
  login(data: any){
    const user = {
      username: data.name  || null,
      password: data.password || null
    }
    this.api.loginAccount(user).subscribe(data=>{
      const response: any = data;
      this.saveToken(response.token)
      this.location.back();
    })
  }
  cancel(){
    this.location.back();
  }
}