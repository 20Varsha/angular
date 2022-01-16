import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  acno=""
  pswd=""
amount=""

  constructor() { }

  ngOnInit(): void {
  }

  deposit(){
    alert("depositted")
  }
}
