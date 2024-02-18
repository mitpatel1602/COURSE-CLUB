import { EditProfileComponent } from './PROFILE/edit-profile/edit-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './AUTH/register/register.component';
import { LoginComponent } from './AUTH/login/login.component';
import { NavbarComponent } from './NAVBAR/navbar/navbar.component';
import { HomeComponent } from './HOME/home/home.component';
import { PageNotFoundComponent } from './PAGENOTFOUND/page-not-found/page-not-found.component';
import { AboutUsComponent } from './ABOUT-US/about-us/about-us.component';
import { ProfileComponent } from './PROFILE/profile/profile.component';
import { CartComponent } from './CART/cart/cart.component';
import { ShopComponent } from './SHOP/shop/shop.component';
import { WishlistComponent } from './PROFILE/wishlist/wishlist.component';
import { OrderComponent } from './PROFILE/order/order.component';
import { DashboradComponent } from './ADMIN/dashborad/dashborad.component';
import { AllproductComponent } from './ADMIN/allproduct/allproduct.component';
import { AddproductComponent } from './ADMIN/addproduct/addproduct.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'nav',component:NavbarComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutUsComponent},
    {path:'profile',component:ProfileComponent,
    children:[
      {path:'wishlist',component:WishlistComponent},
      {path:'order',component:OrderComponent},
      {path:'editProfile',component:EditProfileComponent}
    ]
    },
    {path:'cart',component:CartComponent},
    {path:'shop',component:ShopComponent}
  ]},
  {path:'admin',component:DashboradComponent,
  children:[
    {path:'allproduct' , component:AllproductComponent},
    {path:'addproduct',component:AddproductComponent}
  ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
