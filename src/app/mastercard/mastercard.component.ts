import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'app-mastercard',
  templateUrl: './mastercard.component.html',
  styleUrls: ['./mastercard.component.scss']
})
export class MastercardComponent implements OnInit {

  constructor() { }

  // mastercardform:FormGroup= new FormGroup({
  //   emailFormControl:new FormControl(null, [Validators.required]),
  // numberform :new FormControl('', [Validators.required]),
  // dateform :new FormControl('', [Validators.required]),
  // cvvform :new FormControl('', [Validators.required,Validators.maxLength(5)]),

  // })
  mastercard:FormGroup=new FormGroup({
    emailFormControl : new FormControl('', [Validators.required,Validators.maxLength(16)]),
    numberform : new FormControl('', [Validators.required,Validators.maxLength(14)]),
    dateform : new FormControl('', [Validators.required]),
    cvvform : new FormControl('', [Validators.required,Validators.maxLength(3)]),
  })

  ngOnInit(): void {
  }

}
