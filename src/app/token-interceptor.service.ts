import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  getToken(){
    return localStorage.getItem('token');
  }
  intercept(req: any, next: HttpHandler){
    const token_request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`
      }
    })
    return next.handle(token_request);
  }
}
