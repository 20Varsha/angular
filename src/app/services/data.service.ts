import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any = {
    1000: { acno: 1000, uname: "anu", password: "u1", balance: 50000 },
    1001: { acno: 1001, uname: "manu", password: "u2", balance: 3000 },
    1002: { acno: 1002, uname: "sanu", password: "u3", balance: 12000 },

  }

  constructor() { }

  register(acno:any,uname:any,password:any){

    let database=this.data

if(acno in database){
  return false
}
else{
  database[acno]={
    acno,
    uname,
    password,
    balance:0
  }
  return true
}

  }




login(acno:any,pswd:any){

  let database=this.data


  if(acno in database){
    if(pswd==database[acno]["password"]){
      return true
    }

  
  else{
    alert("invalid password")
    return false
  }
}

else{
  alert("user doesnot exist..." )
  return false
}
}
}