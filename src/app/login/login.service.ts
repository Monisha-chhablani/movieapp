import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const user_API = "http://localhost:8084/auth/v1";
const headers = {'content-type':'application/json'};
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }
  generateToken(user: any){

    const body = JSON.stringify(user);

    console.log(body)

      return this.http.post(user_API+'/login',body,{'headers':headers,responseType:'text' as 'json'})

      //return this.http.post(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/userlogin`,body,{'headers':headers,responseType:'text' as 'json'});

    }

    fetchRole(username:any,password:any)
    {
      return this.http.get(user_API+'/getRole?username='+username+'&password='+password,{'headers':headers,responseType:'text'})
      // return this.httpClient.get(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/userlogin?username=`+username+'&password='+password,{'headers':headers,responseType:'text'})

    }
}
