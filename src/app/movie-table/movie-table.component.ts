
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminService } from '../admin/admin.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements AfterViewInit,OnInit {

  movieData: Array<any> = [];
  displayedColumns: string[] = ['movieId', 'movieName', 'theatreName', 'totalSeatsBooked', 'availableSeats','Delete'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private adminservice: AdminService) {
    
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.adminservice.getMovieData().subscribe(
      (res: Array<any>) => {
        console.log("res is => ", res);
        this.movieData = res;
        this.dataSource = new MatTableDataSource(this.movieData);
        console.log("movie data is getmovie=> ", this.movieData);
      },
      (error) => {
        console.log("Error occurred while fetching movie data:", error);
      }
    );
  }


  deleteByMovieId(id:any){
    console.log("id=> ",id);
    this.adminservice.deleteMovieById(id).subscribe(res=>{
      console.log("movie deleted successfully!!");
      this.getMovie();
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
