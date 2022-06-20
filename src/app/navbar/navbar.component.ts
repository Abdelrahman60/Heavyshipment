import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService: AuthService) {}
  islogin: boolean = false;
  userdata:any;

  calllogout() {
    this._AuthService.logout();
  }



  ngOnInit(): void {
    let close = document.querySelector('#nav-close') as HTMLElement;
    let navmenu = document.querySelector('#navbarSupportedContent') as HTMLElement;
    let navtoggle = document.querySelector('#navbar-toggle') as HTMLElement;
    let navlist = document.querySelectorAll('.nav-link1');


    if (close) {
      close.addEventListener('click', () => {
        navmenu.classList.remove('show-menu');
      });
      function navlink() {
        navmenu.classList.remove('show-menu');
      }

        navlist.forEach((n) => n.addEventListener('click', navlink));


      if (navtoggle) {
        navtoggle.addEventListener('click', () => {
          navmenu.classList.add('show-menu');
        });
      }
    }
    this._AuthService.usertoken.subscribe(()=>{
      if(this._AuthService.usertoken.getValue() != null){
        this.islogin=true;
      }
      else
      this.islogin=false;
    })

    this.userdata=this._AuthService.userdata.getValue()

  }
}
