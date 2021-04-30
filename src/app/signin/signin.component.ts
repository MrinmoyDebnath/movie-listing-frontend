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
      username: btoa(data.name)  || null,
      email: btoa(data.email) || null,
      password: btoa(data.password)  || null
    }
    this.api.createAccount(user).subscribe(data=>{
      console.log(data)
    }, (error)=>{
      alert(error.error)
    })
  }
  
  login(data: any){
    const user = {
      username: btoa(data.name)  || null,
      password: btoa(data.password) || null
    }
    this.api.loginAccount(user).subscribe(data=>{
      const response: any = data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken)
      this.location.back();
    }, (error)=>{
      alert(error.error)
    })
  }
  cancel(){
    this.location.back();
  }
}