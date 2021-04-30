import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private api: ApiServiceService) { }

  reAuthenticate(){
    const user = localStorage.getItem('user')||'';
    const parsedUser = JSON.parse(user);
    this.api.refreshToken(parsedUser).subscribe(data=>{
      const response:any = data;
      const token = response.token;
      localStorage.setItem('token', token);
    }, (error)=>{
      console.log(error)
    });
  }
  intercept(req: any, next: HttpHandler){
    const token_request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return next.handle(token_request).pipe(catchError(error=>{
        if(error.status===403){
          this.reAuthenticate();
          retry(1)
        }
        return next.handle(token_request)
      })
    );
  }
}
