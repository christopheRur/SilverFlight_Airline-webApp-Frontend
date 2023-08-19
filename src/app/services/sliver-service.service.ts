import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { silverFlights } from '../SilverFlights';

@Injectable({
  providedIn: 'root'
})
export class SliverServiceService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient,private location: Location,) {

   }

public retrieveFlights():Observable<silverFlights[]>{

return this.http.get<silverFlights[]>(`${this.apiServerUrl}/air/flights`);

}

public bookAticket(flightTicket:any):Observable<any>{
  // const headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  // });

  return this.http.post<any>(`${this.apiServerUrl}/air/book_fli`,flightTicket);

}

/**
 *Will reload the passage
 */
 public refreshPage() {
  window.location.reload();
}

public removeBookedFlights(flight: silverFlights):Observable<any>{

    const header = new HttpHeaders({
     'Content-Type': 'application/json',
   });
   console.log("======>"+flight.destination)
   this.refreshPage();

  return this.http.post<any>(`${this.apiServerUrl}/air/removeBkFl`,flight,{ headers: header });
}
/**
 * Looks up a flight
 * @param flight
 * @returns
 */
public looksUpFlights(flight: silverFlights):Observable<any>{

  const header = new HttpHeaders({
   'Content-Type': 'application/json',
 });
 console.log("-->>"+flight.destination)
 this.refreshPage();

return this.http.post<any>(`${this.apiServerUrl}/air/lookup_fli`,flight,{ headers: header });
}



}
