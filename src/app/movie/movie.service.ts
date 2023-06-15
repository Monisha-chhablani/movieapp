import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 

  constructor(private http:HttpClient) { }

  private apiGet='http://localhost:8089/api/v1/getAllMovies';
  //private apiGetById='';
  private apiPost='https://30oniuksik.execute-api.us-west-2.amazonaws.com/MovieBookingApi/movie';
  private apiDelete='http://localhost:8089/api/v1/delete';

  addMovie(b:Movie):Observable<Movie>
 {
 return this.http.post<Movie>(this.apiPost,b);
 }

 

getAllMovies():Observable<Array<Movie>>
{
 return this.http.get<Array<Movie>>(this.apiGet);

}

//getById(bid:number):Observable<Array<Movie>>
//{
 //return this.http.get<Array<Movie>>(`${this.apiGetById}/${bid}`);
//}

deleteMovie(bid:number):Observable<Movie>
{
 return this.http.delete<Movie>(`${this.apiDelete}/${bid}`);

}
}
