import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { silverFlights } from 'src/app/SilverFlights';
import { SliverServiceService } from 'src/app/services/sliver-service.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent implements OnInit {
  [x: string]: any;

  silvFlight!: silverFlights[];
  bookedFlight!: silverFlights;

  constructor(
    private flights: SliverServiceService,
    private location: Location,
    private router: Router
  ) {}

  destination: string = '';
  origin: string = '';
  departureD: string = '';
  arrivalD: string = '';
  passengers: number = 0;

  ngOnInit(): void {
    this.getFlights();
  }

  public getFlights(): void {
    this.flights.retrieveFlights().subscribe(
      (response: silverFlights[]) => {
        this.silvFlight = response.reverse();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  /**
   *Allows user to book a flight
   */
  public bookAFlight(): void {
    let ticket = {
      passengers: this.passengers,
      origin: this.origin,
      destination: this.destination,
      departureT: this.departureD,
      arrivalT: this.arrivalD,
    };

    this.flights.bookAticket(ticket).subscribe(
      (response: silverFlights) => {
        console.log('------|------->You made it!');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

/**
 *Looks ups available flights
 */

 public lookUpFlight(){

if(this.origin.length==0 || this.destination.length==0){
  alert("Missing Origin or Destination");
  return;
}



  let flgt: silverFlights = {
    id:100000,
    flightNumber:"WRKDF-9909",
    passengers: this.passengers,
    origin: this.origin,
    destination: this.destination,
    departureT: this.departureD,
    arrivalT: this.arrivalD,
  };

  this.flights.looksUpFlights(flgt).subscribe(
    (response: silverFlights) => {

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

  /**
   *Will reload the passage
   */
  public refreshPage() {
    window.location.reload();
  }

  /**
   *romoves a booked flight
   */
  public removeFlight(fli: silverFlights): void {
    console.log('------>' + fli);

    this.flights.removeBookedFlights(fli).subscribe(
      (response: silverFlights) => {
        this.refreshPage();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
