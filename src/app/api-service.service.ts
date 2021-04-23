import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  getMovies(page: any, limit: any){
    const url = `http://localhost:3000/movies?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  getMovieByName(name: any){
    const url = `http://localhost:3000/movies/${name}`;
    return this.http.get(url);
  }
  getMoviesOfActor(name: any, page: any, limit: any){
    const url = `http://localhost:3000/movies/actor/${name}?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  getMoviesOfProducer(name: any, page: any, limit: any){
    const url = `http://localhost:3000/movies/producer/${name}?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  getActorByName(name: any){
    const url = `http://localhost:3000/actors/${name}`;
    return this.http.get(url);  
  }
  getActors(page: any, limit: any){
    const url = `http://localhost:3000/actors?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  getProducerByName(name: any){
    const url = `http://localhost:3000/producers/${name}`;
    return this.http.get(url);
  }
  getProducers(page: any, limit: any){
    const url = `http://localhost:3000/producers?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
  editMovie(data: any){
    const url = `http://localhost:3000/movies`;
    console.log(data)
    return this.http.put(url, data);
  }
  createActor(data: any){
    const url = `http://localhost:3000/actors`;
    console.log(data)
    return this.http.post(url, data);
  }
  createMovie(data: any){
    const url = `http://localhost:3000/movies`;
    console.log(data)
    return this.http.post(url, data);
  }
  createProducer(data: any){
    const url = `http://localhost:3000/producers`;
    console.log(data)
    return this.http.post(url, data);
  }
}
