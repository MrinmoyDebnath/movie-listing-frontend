import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000';
  
  getToken():string{
    return localStorage.getItem('token') || '';
  }

  // header = new HttpHeaders({
  //   'Content-Type':'application/json; charset=utf-8',
  //   'authorization': this.getToken()  
  // })
  getMovies(page: any, limit: any){
    const url = `${this.apiUrl}/movies?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  getMovieByName(name: any){
    const url = `${this.apiUrl}/movies/${name}`;
    return this.http.get(url);
  }
  getMoviesOfActor(name: any, page: any, limit: any){
    const url = `${this.apiUrl}/movies/actor/${name}?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  getMoviesOfProducer(name: any, page: any, limit: any){
    const url = `${this.apiUrl}/movies/producer/${name}?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  getActorByName(name: any){
    const url = `${this.apiUrl}/actors/${name}`;
    return this.http.get(url);  
  }
  getActors(page: any, limit: any){
    const url = `${this.apiUrl}/actors?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  getProducerByName(name: any){
    const url = `${this.apiUrl}/producers/${name}`;
    return this.http.get(url);
  }
  getProducers(page: any, limit: any){
    const url = `${this.apiUrl}/producers?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  editMovie(data: any){
    const url = `${this.apiUrl}/movies`;
    return this.http.put(url, data);
  }
  createActor(data: any){
    const url = `${this.apiUrl}/actors`;
    return this.http.post(url, data);
  }
  createMovie(data: any){
    const url = `${this.apiUrl}/movies`;
    return this.http.post(url, data);
  }
  createProducer(data: any){
    const url = `${this.apiUrl}/producers`;
    return this.http.post(url, data);
  }
  createAccount(data: any){
    const url = `${this.apiUrl}/user/signup`;
    return this.http.post(url, data);
  }
  loginAccount(data: any){
    const url = `${this.apiUrl}/user/login`;
    return this.http.post(url, data);
  }
}
