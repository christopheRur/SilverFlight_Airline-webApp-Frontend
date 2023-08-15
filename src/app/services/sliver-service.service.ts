import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { silverFlights } from '../SilverFlights';

@Injectable({
  providedIn: 'root'
})
export class SliverServiceService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) {

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

}
