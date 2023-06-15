import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  constructor(private bs:MovieService){}



 data:{}|any; movieObj :Movie = new Movie(); moviearr:Array<Movie>=[];
 displayedColumns: string[] = ['movieId', 'movieName', 'theatreName', 'totalSeatsBooked','action'];
 addMovieDetails()
 {
 this.bs.addMovie(this.movieObj).subscribe(data=>
 {
 this.data=JSON.stringify(data);
 this.moviearr.push(this.data);
 alert("Movie is added");
 window.location.reload();
 },
   function (error: any) {
     console.log(error);
   })
 };



 public dataSource:[]|any;
 viewAllMovies()
 {
this.bs.getAllMovies().subscribe(data=>
 {
 this.moviearr=Object.values(data);
 this.dataSource = this.moviearr;
 },
 error=>
 {
 console.log(error);
 })
 };



deleteMovie(bid:number)
{
 this.bs.deleteMovie(bid).subscribe(data=>
 {
 let movieIndex = this.moviearr.findIndex(b=>b.movieId ===bid);
 this.moviearr.splice(movieIndex,1);
 alert("Movie is deleted along with ticket data");

 },
 error=>
 {
 console.log(error);
 })
}






 response:{}|any;
 moviem:Movie =new Movie();
 MovieList:Array<Movie>=[];



 /*searchById()
 {
 this.bs.getById(this.moviem.movieId).subscribe(resposne=>
   {
   this.MovieList = Object.values(resposne);
 this.response = JSON.stringify(resposne);
 alert("Search result is given");
 },
 error=>
 {
 console.log(error);
 })
 };
 */
}
