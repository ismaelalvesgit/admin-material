import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide:boolean = true

  form:FormGroup = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
    "senha": new FormControl("", [Validators.required])
  })

  constructor() { }

  ngOnInit() {
  }

  submit(){
    
  }
}
