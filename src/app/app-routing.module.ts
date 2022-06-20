import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TrackingComponent } from './tracking/tracking.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TruckComponent } from './truck/truck.component';
import { WinchesComponent } from './winches/winches.component';
import { SmallComponent } from './small/small.component';
import { MediumComponent } from './medium/medium.component';
import { HeavyComponent } from './heavy/heavy.component';
import { PaymentComponent } from './payment/payment.component';
import { VisaComponent } from './visa/visa.component';
import { CashComponent } from './cash/cash.component';
import { MastercardComponent } from './mastercard/mastercard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsercreatedComponent } from './usercreated/usercreated.component';
import { AuthGuard } from './auth.guard';
import { VisaaComponent } from './visaa/visaa.component';




const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:"full"},
  {path:'home', canActivate:[AuthGuard] ,component:HomeComponent,},
  {path:'shipping',canActivate:[AuthGuard] ,component:ShippingComponent,},
  {path:'tracking',canActivate:[AuthGuard] ,component:TrackingComponent},
  {path:'order',canActivate:[AuthGuard] ,component:OrderComponent},
  {path:'contact',canActivate:[AuthGuard] ,component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

  {path:'truck',canActivate:[AuthGuard] ,component:TruckComponent,
  children: [
  {path:'small',canActivate:[AuthGuard] ,component:SmallComponent},
  {path:'medium',canActivate:[AuthGuard] , component:MediumComponent},
  {path:'heavy',canActivate:[AuthGuard] , component:HeavyComponent},
  ]},
  {path:'winches',canActivate:[AuthGuard] ,component:WinchesComponent},
  {path:'payment',canActivate:[AuthGuard] ,component:PaymentComponent},
  {path:'mastercard',canActivate:[AuthGuard] ,component:MastercardComponent},
  {path:'visa',canActivate:[AuthGuard] ,component:VisaComponent},
  {path:'visaa',canActivate:[AuthGuard] ,component:VisaaComponent},

  {path:'cash',canActivate:[AuthGuard] ,component:CashComponent},
  {path:'usercreated' ,component:UsercreatedComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
