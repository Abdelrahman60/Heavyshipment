import { Component, OnInit } from '@angular/core';
import { interval, timeInterval, timer } from 'rxjs';
import Typed from 'typed.js';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';

declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _NgwWowService:NgwWowService, private _Router:Router) {

  }
counter=0;
order:number=0;
usernev:string='';





  ngOnInit(): void {
    let typed = new Typed('.element', {
      strings: ['Easier Than Ever','Faster Than Ever'],
      typeSpeed: 75,
      startDelay: 200,
      backSpeed: 75,
      loop: true,
      showCursor: false,
    });

    this._NgwWowService.init()




  }





}
