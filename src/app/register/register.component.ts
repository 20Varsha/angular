import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){

var uname=this.uname
var acno=this.acno
var pswd=this.pswd

var result=this.ds.register(acno,uname,pswd)
if(result){

  alert("Successfully Registered!!!")
  this.router.navigateByUrl('')
}
else{
  alert("Account already exist")
  this.router.navigateByUrl('')
}
  }

}