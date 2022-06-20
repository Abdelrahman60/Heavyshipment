import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservService {

  constructor(private _HttpClient:HttpClient) { }
 
  order(formorder:object):Observable<any>{
   return this._HttpClient.post('https://transporting-heavyshippment.herokuapp.com/api/reservations',formorder)
  }


}
