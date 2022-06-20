import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usertoken= new BehaviorSubject(null);
  userdata=new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router:Router) {

    if(localStorage.getItem('usertoken') != null && localStorage.getItem('userdata') !=null)
    {
      this.userdecode();
    }
  }
  helper = new JwtHelperService();

  userdecode():void{
    let encoded = JSON.stringify(localStorage.getItem('usertoken'));
    let data:any=JSON.parse(localStorage.getItem('userdata')||'{}');
    this.userdata.next(data);
    let decodedToken = this.helper.decodeToken(encoded);
    this.usertoken.next(decodedToken);

 }

  // userdecode(): void {
  //   let encoded = JSON.stringify(localStorage.getItem('usertoken'));
  //   let decoded:any = jwtDecode(encoded);
  //   console.log(decoded);
  //   this.usertoken.next(decoded)
  // }



  register(userdata: object): Observable<any> {
    return this._HttpClient.post(
      'https://transporting-heavyshippment.herokuapp.com/api/register',
      userdata
    );
  }

  login(userdata: object): Observable<any> {
    return this._HttpClient.post(
      'https://transporting-heavyshippment.herokuapp.com/api/login',
      userdata
    );
  }

  logout():void{
    localStorage.removeItem('usertoken');
    localStorage.removeItem('userdata');
    this.usertoken.next(null);
    this.userdata.next(null);
    this._Router.navigate(['/login'])
  }
}
