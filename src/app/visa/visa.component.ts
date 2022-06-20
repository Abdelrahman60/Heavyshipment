import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {

  constructor() { }
  visacard:FormGroup=new FormGroup({
    emailFormControl : new FormControl('', [Validators.required,Validators.maxLength(16)]),
    numberform : new FormControl('', [Validators.required,Validators.maxLength(14)]),
    dateform : new FormControl('', [Validators.required]),
    cvvform : new FormControl('', [Validators.required,Validators.maxLength(3)]),
  })

  ngOnInit(): void {
  }

}
