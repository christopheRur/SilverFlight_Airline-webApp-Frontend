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
  passengers: number = 1;

  hideBlock:boolean=false;

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
 * shows list of available flights
 */

public showList():boolean{

  this.hideBlock=!this.hideBlock;
  console.log("show list!");

  return this.hideBlock;
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
      console.log("+lkkllklklklklk-------"+this.origin+"00--000000>>"+response.origin)
      if(response.origin===this.origin
        && response.destination===this.destination)
      {

       this.showList();
       console.log("+lkkllklklklklk"+this.origin)
       }

       else{
        alert("No flight was found!");
       }

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

        alert("Your Flight has been Booked!")
        this.refreshPage();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
