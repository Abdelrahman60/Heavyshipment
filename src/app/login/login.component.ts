import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _WowService: NgwWowService,
    private _AuthService: AuthService,
    private _Router: Router
  ) {}

  logingroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this._WowService.init();
  }

  loginuser(form: FormGroup) {
    this._AuthService.login(form.value).subscribe((data) => {
      if (data.message == 'User logged in successfully') {
        localStorage.setItem('userdata',JSON.stringify(data.data.user));
        localStorage.setItem('usertoken',JSON.stringify(data.data.token));
        this._AuthService.userdecode();
        this._Router.navigate(['/home']);
      }
    });
  }
}
