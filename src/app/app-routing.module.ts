
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
import { DashboradComponent } from './ADMIN/dashborad/dashborad.component';
import { AllproductComponent } from './ADMIN/allproduct/allproduct.component';
import { AddproductComponent } from './ADMIN/addproduct/addproduct.component';
import { EditAdminComponent } from './ADMIN/edit-admin/edit-admin.component';
import { ProductEditComponent } from './ADMIN/product-edit/product-edit.component';
import { ViewproductComponent } from './SHOP/viewproduct/viewproduct.component';
import { OrderComponent } from './PROFILE/order/order.component';


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
    {path:'shop',component:ShopComponent},
    {path:'viewproduct',component:ViewproductComponent}
  ]},
  {path:'admin',component:DashboradComponent,
  children:[
    {path:'allproduct' , component:AllproductComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'totalorder',component:OrderComponent},
    {path:'editAdminProfile',component:EditAdminComponent},
    {path:'editProduct',component:ProductEditComponent},
  ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
