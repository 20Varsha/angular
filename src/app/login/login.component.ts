import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your banking perfect partner"


  accno = "Account Number Please"
  acno = ""
  pswd = ""



  constructor(private routerLogin:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno)

  }

  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd)

  }


  login() {

  
    // console.log(p);
    
    var acno = this.acno
    var pswd = this.pswd
    let result = this.ds.login(acno,pswd)

if(result){

alert("Login success")
this.routerLogin.navigateByUrl('dashboard')

}
  }

  //    if(acno in db){
  //      if(pswd==db[acno]["password"]){
  //        alert("Login Successful")
  //        this.routerLogin.navigateByUrl('dashboard')
  //      }
  //      else{
  //        alert("Something Went Wrong")
  //      }
  //     }
  //      else{
  //       alert("Faild")
       
  //    }

  
  // }


  // login(a:any,p:any) {

  //   console.log(a);
  //   // console.log(p);
    
  //   var acno = a.value
  //   var pswd = p.value

  //   let db = this.data

  //    if(acno in db){
  //      if(pswd==db[acno]["password"]){
  //        alert("Login Successful")
  //      }
  //      else{
  //        alert("Something Went Wrong")
  //      }
  //     }
  //      else{
  //       alert("Faild")
       
  //    }

  
  }