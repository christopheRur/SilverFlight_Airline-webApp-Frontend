import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { silverFlights } from 'src/app/SilverFlights';
import { SliverServiceService } from 'src/app/services/sliver-service.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
[x: string]: any;

silvFlight!: silverFlights[];
bookedFlight!: silverFlights;

  constructor(private flights: SliverServiceService,
    private router:Router) { }



destination:string='';
origin:string='';
departureD:string='';
arrivalD:string='';
passengers: number=0;


  ngOnInit(): void {
    this.getFlights();
  }

public getFlights():void{
  this.flights.retrieveFlights().subscribe(
(response: silverFlights[]) =>{
  this.silvFlight=response.reverse();
},
(error: HttpErrorResponse) => {
  alert(error.message);
}

  );
}

public bookAFlight():void{
let ticket={
passengers:this.passengers,
origin:this.origin,
destination:this.destination,
departureT:this.departureD,
arrivalT:this.arrivalD,

}

  this.flights.bookAticket(ticket).subscribe(
(response: silverFlights) =>{
  console.log("------|------->You made it!")
},
(error: HttpErrorResponse) => {
  alert(error.message);
}

  );
}

}
