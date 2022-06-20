import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerform:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.maxLength(14)]),
    last_name:new FormControl(null,[Validators.required,Validators.maxLength(14)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
    password:new FormControl(null,[Validators.required, Validators.pattern(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]),
    city:new FormControl(null,[Validators.required])


  })

  error:string='';

  constructor(private _WowSercive:NgwWowService, private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit(): void {
    this._WowSercive.init();
  }


  registeruser(form:FormGroup){
    this._AuthService.register(form.value).subscribe((data)=>{
      if(data.message=="User created successfully"){
        this._Router.navigate(['/usercreated'])
      }
      else
      {
        this.error='The Email is Already Taken'
      }



    })

  }

}
