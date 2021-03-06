import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = this.fb.group({

    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {

    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd

    // console.log(this.registerForm)

    if (this.registerForm.valid) {
      this.ds.register(acno, uname, pswd)
        .subscribe((result: any) => {
          if (result) {

            alert(result.message)
            this.router.navigateByUrl('')
          }
        },
          (result: any)=>{
          alert(result.error.message)
      this.router.navigateByUrl('')
    }
)
  }
    else {
  alert("invalid validation")
}
  }
  
}