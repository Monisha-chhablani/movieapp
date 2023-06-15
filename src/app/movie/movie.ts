import { Ticket } from "../ticket/ticket";
export class Movie {
    movieId :number |any;
    movieName :string|any;
    theatreName :string|any;
    totalSeatsBooked :number|any;
    ticketList: Array<Ticket>=[];
}
