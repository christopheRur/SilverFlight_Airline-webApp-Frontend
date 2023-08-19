import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { silverFlights } from 'src/app/SilverFlights';
import { SliverServiceService } from 'src/app/services/sliver-service.service';

@Component({
  selector: 'app-admin-input',
  templateUrl: './admin-input.component.html',
  styleUrls: ['./admin-input.component.scss']
})
export class AdminInputComponent implements OnInit {

  constructor(private flights: SliverServiceService,
     private location: Location,
    private router:Router) { }

hideBlock:boolean=false;


  destination:string='';
origin:string='';
departureD:string='';
arrivalD:string='';
passengers: number=0;

  ngOnInit(): void {
  }

  public  adminUse():boolean{

    this.hideBlock=!this.hideBlock;
    console.log("admin user!")

    return this.hideBlock;

  }

/**
 *Will reload the passage
 */
 public refreshPage() {
  window.location.reload();
}

/**
 *Admin add ticket in db
 */
  public adminBooksAFlight():void{
    let ticket={
    passengers:this.passengers,
    origin:this.origin,
    destination:this.destination,
    departureT:this.departureD,
    arrivalT:this.arrivalD,

    }

    if((ticket.destination.length==0 || ticket.origin.length==0)
    && (ticket.departureT.length==0||ticket.arrivalT.length==0)){
      alert("Check Data Entry!!");
      return;
    }

      this.flights.bookAticket(ticket).subscribe(
    (response: silverFlights) =>{
      console.log("------|------->You made it!");
      this.refreshPage();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }

      );
    }

}
