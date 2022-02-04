import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = ""
  currentAcno = ""

  data: any = {
    1000: { acno: 1000, uname: "Aparna", password: "u1", balance: 50000, transaction: [] },
    1001: { acno: 1001, uname: "Gouri", password: "u2", balance: 3000, transaction: [] },
    1002: { acno: 1002, uname: "Aleena", password: "u3", balance: 12000, transaction: [] },

  }

  constructor(private http:HttpClient) {//here we 
    // this.getDetails()
    
  }

  getTransaction(acno: any) {
    const data={
      acno
    }
    // server call transaction
    return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
    
       }
    

  saveDetails() {
    if (this.data) {
      localStorage.setItem("data", JSON.stringify(this.data))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
    if (this.currentAcno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
    }
  }


  getDetails() {

    if (localStorage.getItem("data")) {
      this.data = JSON.parse(localStorage.getItem("data") || '')
    }

    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if (localStorage.getItem("currentAcno")) {
      this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || '')
    }
  }


  register(acno: any, uname: any, password: any) {
const data={
  acno,
  uname,
  password
}
// server call registration
return this.http.post('http://localhost:3000/register',data)

   }
  

 login(acno: any, password: any) {
//request body
    const data={
      acno,
     password
    }
    // server call login
    return this.http.post('http://localhost:3000/login',data)
    
       }


      
//to add token in headers

getOptions(){

  const token=JSON.parse(localStorage.getItem("token") || '')

  console.log(token)

  //request header creatuion

  let headers=new HttpHeaders()

  if(token){

    headers=headers.append('x-access-token',token)

options.headers=headers

  }

console.log(options)

return options

}


deposit(acno: any, password: any, amt:any) {

    const data={
      acno,
    password,
     amt
    }
    // server call registration
    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
    
       }
      
  
  withdraw(acno:any,password:any,amt:any)
  {

    const data={
      acno,
     password,
     amt
    }
    // server call withdraw
    return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
    
     }


deleteAcc(acno:any){
  return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())

}
}