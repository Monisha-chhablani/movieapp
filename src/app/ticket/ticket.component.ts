import { Component } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import { Ticket} from './ticket';
import { TicketService} from './ticket.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  tickets: any;
  constructor(private ts:TicketService){};


 data:{}|any; ticketObj:Ticket = new Ticket(); ticketList:Array<Ticket>=[];
 displayedColumns: string[] = ['transactionId', 'seatsBooked','movie_id_fk'];
 addTicket(bid:number)
 {
 this.ts.addTicket(bid,this.ticketObj).subscribe(data=>
 {
 this.data = JSON.stringify(data);
 this.tickets.push(this.data);
 alert("Reader data added in Reader table and updated in Book table");
 }, 
 error=>
 {
  console.log(error);
  });
 }



 //public dataSource:[]|any;
//  //getAllTickets()
//  /{
//  this.ts.getAllTickets(this.ticketObj.movie_id_fk).subscribe(data=>
//  {
//    this.tickets = Object.values(data);
// this.dataSource = this.tickets;
//  },
//  error=>
//  {
//  console.log(error);
//  });
// }
}