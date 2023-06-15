import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    
    role!:any;
    
  loginForm!:any;
    constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({

      username:['',Validators.required],
      
      password:['',Validators.required]
      
      });
  }
  
    submitForm()
    {

    
    console.log(this.loginForm.value);
    this.loginService.generateToken(this.loginForm.value).subscribe((Response:any)=>{
      console.log(Response);
      let fieldValues = JSON.parse(Response.toString());
      let keys = Object.keys(fieldValues)
      let values = keys.map(k => fieldValues[k])
      console.log(keys[1]) //=> ['key']
      console.log(values[1]) //=> ['value']

       console.log("token is =>",values[1]);
      localStorage.setItem('token',values[1]);
      this.loginService.fetchRole(this.loginForm.value.username,this.loginForm.value.password).subscribe(res=>{
        this.role =  res;
        if(this.role=="ADMIN")
        {
          this.router.navigate(['/admin']);
             }
        else if(this.role=="USER")
        {

          this.router.navigate(['/user']);
        }
      })
      // this.router.navigate(['/'])
    })
    }
}
