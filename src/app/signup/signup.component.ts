import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signUpData!:any;
  constructor(private fb:FormBuilder,private signUpService:SignupService,private snack:MatSnackBar,private router:Router){}
  ngOnInit(): void {
    this.signUpData = this.fb.group({

      username:['',Validators.required],
     
     password:['',Validators.required],
     // confirmPassword:['',Validators.required],
     emailId:['',Validators.required],
     favSport:['',Validators.required],
     
     });
  }

  
  
  
  submitForm()
  
  {



  //  if(this.signUpData.controls.password.value==this.signUpData.controls.password.value)
  //   {
  //    this.snack.open('Password and confirm password should be same !!','Ok',
  //    {duration:2000,
  //      verticalPosition:'top',
  //      horizontalPosition:'right',
  //      panelClass: ['red-snackbar']
  //    });

  //    return;
  //   }

  
   console.log(this.signUpData.value);
   this.signUpService.createUser(this.signUpData.value).subscribe(
     (data:any)=>{
       //success
       console.log("Success");
       console.log(data);

      
      
       // this.snack.open('Success!!','Ok',
       // {duration:2000,
       //   verticalPosition:'top',
       //   horizontalPosition:'right',
       //   panelClass: ['green-snackbar']
       // });

       

     //Swal.fire('Successfuly Done','User id is '+data.id,'success')
     this.router.navigate(['login'])

     },
     (error)=>{
       console.log(error);
     //   this.snack.open('Somwthing went wrong !!','Ok',
     // {duration:2000,
     //   verticalPosition:'top',
     //   horizontalPosition:'right',
     //   panelClass: ['red-snackbar']
     // });

    // Swal.fire('Oops..','Somwthing went wrong!','error');


     }
    )
  
  }


}
