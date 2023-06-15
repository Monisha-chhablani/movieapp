import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare let swal: any;
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  
  constructor( private http:HttpClient ) { }
  baseUrl:any="localhost:8084/auth/v1";
      // public addUser(data:any)
      // {
      //     return this.http.post(`${this.baseUrl}/addUser/`,data);
      // }
      createUser(user: any):Observable<Object>{
        const headers = {'content-type':'application/json'};
  
  
  
          const body = JSON.stringify(user);
      
          console.log(body)
      
          // return this.httpClient.post<Object>(user_API+'/register',body,{'headers':headers,responseType:'text' as 'json'});
      
          return this.http.post<Object>('http://localhost:8084/auth/v1/addUser',body,{'headers':headers,responseType:'text' as 'json'});
          
        }
    }


