import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  movieData:Array<any> = [];


  constructor(private service:AdminService){}

  ngOnInit(): void {
    
      // console.log("movie data before is => ",localStorage.getItem('movie'));
      // this.getMovie();
      // console.log("movie data after is => ",localStorage.getItem('movie'));
   }



  //  getMovie()
  //  {
  //   this.service.getMovieData().subscribe(
  //     (res:Array<any>)=>{
  //         console.log("res is => ",res);
  //         let data = JSON.stringify(res);
  //         // localStorage.setItem('movie',data);
  //             this.movieData = res; 
  //     }); 

  //  }

}
