import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TruckComponent } from './truck/truck.component';
import { WinchesComponent } from './winches/winches.component';
import { SmallComponent } from './small/small.component';
import { MediumComponent } from './medium/medium.component';
import { HeavyComponent } from './heavy/heavy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { PaymentComponent } from './payment/payment.component';
import { MastercardComponent } from './mastercard/mastercard.component';
import { VisaComponent } from './visa/visa.component';
import { CashComponent } from './cash/cash.component';
import {NgwWowModule} from 'ngx-wow'
import {HttpClientModule } from '@angular/common/http';
import { UsercreatedComponent } from './usercreated/usercreated.component';
import { VisaaComponent } from './visaa/visaa.component';
import { DriversComponent } from './drivers/drivers.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ShippingComponent,
    TrackingComponent,
    ContactComponent,
    NotfoundComponent,
    ProfileComponent,
    OrderComponent,
    NavbarComponent,
    FooterComponent,
    TruckComponent,
    WinchesComponent,
    SmallComponent,
    MediumComponent,
    HeavyComponent,
    PaymentComponent,
    MastercardComponent,
    VisaComponent,
    CashComponent,
    UsercreatedComponent,
    VisaaComponent,
    DriversComponent,


  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    NgwWowModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
