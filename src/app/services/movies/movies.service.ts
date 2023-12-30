import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://rickandmortyapi.com/api/episode/10,28'

  constructor( private http: HttpClient) {

  }

  //Metodo Get
  public getMovies(): Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
