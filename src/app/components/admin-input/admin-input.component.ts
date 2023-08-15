import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-input',
  templateUrl: './admin-input.component.html',
  styleUrls: ['./admin-input.component.scss']
})
export class AdminInputComponent implements OnInit {

hideBlock:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  public  adminUse():boolean{

    this.hideBlock=!this.hideBlock;
    console.log("admin user!")

    return this.hideBlock;

  }

}
