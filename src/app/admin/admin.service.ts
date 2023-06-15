import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const Movie_API = 'http://localhost:8082/api/v1';
const headers = {'content-type':'application/json'};
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }

  getMovieData():Observable<any>
  {
   return this.http.get(Movie_API+'/getAllMovies',{responseType: 'json'});
  }

  deleteMovieById(id:any)
  {
    return this.http.delete(Movie_API+'/delete/'+`${id}`,{responseType:'text' });
  }


}
