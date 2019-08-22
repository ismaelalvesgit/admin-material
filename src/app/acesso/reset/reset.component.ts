import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  form:FormGroup = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
  })

  constructor() { }

  ngOnInit() {
  }

  submit(){
    
  }
}
