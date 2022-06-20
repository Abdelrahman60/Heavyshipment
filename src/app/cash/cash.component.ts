import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})
export class CashComponent implements OnInit {

  constructor() { }
  cash:FormGroup=new FormGroup({
    nameform : new FormControl('', [Validators.required,Validators.maxLength(16)]),
    emailform : new FormControl('', [Validators.required,Validators.email]),
    numberform : new FormControl('', [Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    addressform : new FormControl('', [Validators.required])
  })


  ngOnInit(): void {
  }

}
