// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   title: string = 'The title';
//   constructor() {}

//   ngOnInit() {}

//   updateTitle(value) {
//     console.log(`updateTitle: ${value}`);
//     this.title = value;
//   }
// }
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   title: string;
//   constructor() {}

//   ngOnInit() {}

//   updateTitle(value: string) {
//     console.log(`updateTitle: ${value}`);
//     this.title = value;
//   }
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}