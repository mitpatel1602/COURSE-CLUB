import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './AUTH/login/login.component';
import { RegisterComponent } from './AUTH/register/register.component';
import { NavbarComponent } from './NAVBAR/navbar/navbar.component';
import { HomeComponent } from './HOME/home/home.component';
import { ProfileComponent } from './PROFILE/profile/profile.component';
import { PageNotFoundComponent } from './PAGENOTFOUND/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { AboutUsComponent } from './ABOUT-US/about-us/about-us.component';
import { CartComponent } from './CART/cart/cart.component';
import { ShopComponent } from './SHOP/shop/shop.component';
import { WishlistComponent } from './PROFILE/wishlist/wishlist.component';
import { OrderComponent } from './PROFILE/order/order.component';
import { ButtonModule } from 'primeng/button';
import { EditProfileComponent } from './PROFILE/edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboradComponent } from './ADMIN/dashborad/dashborad.component';
import { AllproductComponent } from './ADMIN/allproduct/allproduct.component';
import { AddproductComponent } from './ADMIN/addproduct/addproduct.component';
import { EditAdminComponent } from './ADMIN/edit-admin/edit-admin.component';
import { ProductEditComponent } from './ADMIN/product-edit/product-edit.component';
import { ViewproductComponent } from './SHOP/viewproduct/viewproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    CartComponent,
    ShopComponent,
    WishlistComponent,
    OrderComponent,
    EditProfileComponent,
    DashboradComponent,
    AllproductComponent,
    AddproductComponent,
    EditAdminComponent,
    ProductEditComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
