// import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // user:any
acno:any

lDate = new Date()

  depositForm=this.fb.group({


    acno: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
   amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm=this.fb.group({

    acno: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
   amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

user:any
  router: any;
  constructor(private ds: DataService,private fb: FormBuilder) { 
this.user=JSON.parse(localStorage.getItem("currentUser") ||'')}
  ngOnInit(): void {
  }

  deposit() {

    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if(this.depositForm.valid){

      this.ds.deposit(acno,pswd,amount)
    .subscribe((result:any)=>{
      if (result) {
alert(result.message)
      }     
    },
    (result)=>{
    alert(result.error.message)
    }
    )
  }
  
  else{
    alert("Invalid Form")
  }
    }

  withdraw() {


    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount

    
    if(this.withdrawForm.valid){

      this.ds.withdraw(acno,pswd,amount)
    .subscribe((result:any)=>{
      if (result) {
alert(result.message)
      }     
    },
    (result)=>{
    alert(result.error.message)
    }
    )
  }
  
  else{
    alert("Invalid Form")
  }
    }

    deleteFromParent(){
      this.acno=JSON.parse(localStorage.getItem("currentAcno")|| '')
    }
    onDelete(event:any){

      this.ds.deleteAcc(event)
      .subscribe((result:any)=>{
        if (result) {
  alert(result.message)
this.router.navigateByUrl("")
        }
      },

        (result)=>{
          alert(result.error.message)
          }
      )

    }

    onCancel(){
      this.acno=""
    }
  
    onLogout(){
      this.router.navigateByUrl('login')
    }
  }
  