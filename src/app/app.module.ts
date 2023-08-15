import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { AdminInputComponent } from './components/admin-input/admin-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    AdminInputComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([{path:'flight',component: FlightComponent},
    {path:'admint-input',component: AdminInputComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
