import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contactform:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.maxLength(16)]),
    emailform:new FormControl(null,[Validators.required,Validators.email])
  })

  constructor(private _WowService:NgwWowService) { }

  ngOnInit(): void {
    this._WowService.init();
  }

}
