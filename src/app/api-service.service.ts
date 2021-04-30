import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  handleError(error: any){
    return throwError(error)
  } 
  getMovies(page: any, limit: any){
    const url = `${environment.API_URL}/movies?page=${page}&limit=${limit}`;
    return this.http.get(url).pipe(catchError(this.handleError))
  }
  getMovieByName(name: any){
    const url = `${environment.API_URL}/movies/${name}`;
    return this.http.get(url).pipe(catchError(this.handleError))
  }
  getMoviesOfActor(name: any, page: any, limit: any){
    const url = `${environment.API_URL}/movies/actor/${name}?page=${page}&limit=${limit}`;
    return this.http.get(url).pipe(catchError(this.handleError))
  }
  getMoviesOfProducer(name: any, page: any, limit: any){
    const url = `${environment.API_URL}/movies/producer/${name}?page=${page}&limit=${limit}`;
    return this.http.get(url).pipe(catchError(this.handleError))
  }
  getActorByName(name: any){
    const url = `${environment.API_URL}/actors/${name}`;
    return this.http.get(url)
    
    .pipe(catchError(this.handleError))  
  }
  getActors(page: any, limit: any){
    const url = `${environment.API_URL}/actors?page=${page}&limit=${limit}`;
    return this.http.get(url).pipe(catchError(this.handleError))
  }
  getProducerByName(name: any){
    const url = `${environment.API_URL}/producers/${name}`;
    return this.http.get(url).pipe(catchError(this.handleError))
  }
  getProducers(page: any, limit: any){
    const url = `${environment.API_URL}/producers?page=${page}&limit=${limit}`;
    return this.http.get(url).pipe(catchError(this.handleError))
  }
  editMovie(data: any){
    const url = `${environment.API_URL}/movies`;
    return this.http.put(url, data).pipe(catchError(this.handleError))
  }
  createActor(data: any){
    const url = `${environment.API_URL}/actors`;
    return this.http.post(url, data).pipe(catchError(this.handleError))
  }
  createMovie(data: any){
    const url = `${environment.API_URL}/movies`;
    return this.http.post(url, data).pipe(catchError(this.handleError))
  }
  createProducer(data: any){
    const url = `${environment.API_URL}/producers`;
    return this.http.post(url, data).pipe(catchError(this.handleError))
  }
  createAccount(data: any){
    const url = `${environment.API_URL}/user/signup`;
    return this.http.post(url, data).pipe(catchError(this.handleError))
  }
  loginAccount(data: any){
    const url = `${environment.API_URL}/user/login`;
    return this.http.post(url, data).pipe(catchError(this.handleError))
  }
  refreshToken(data: any){
    const url = `${environment.API_URL}/user/login`;
    return this.http.post(url, data).pipe(catchError(this.handleError))
  }
}
