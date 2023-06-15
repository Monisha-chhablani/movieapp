import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  tickets:Ticket[]|any;
  //private apiGetAllTicket='http://localhost:8086/api/v1/getAllUsers';
  private apiPostTicket='http://localhost:8089/api/v1/ticket/add';

  addTicket(bid:number, ticket:Ticket):Observable<Ticket>
  {
    return this.http.post<Ticket>('${this.apiPostTicket}/${bid}',ticket);

  }
  //getAllTickets(bid:number):Observable<Array<Ticket>>
  //{
    //return this.http.get<Array<Ticket>>('${this.apiGetTicket}/${"?bid="+bid}');
  //}
}
