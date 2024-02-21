import { AddproductComponent } from './../ADMIN/addproduct/addproduct.component';
import { Injectable } from '@angular/core';
import { ProductModel } from '../MODEL/Product.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { cart } from '../MODEL/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  id:string|number = '';

  constructor(private http:HttpClient , private logUser:AuthService) { }

  productDetails:ProductModel[] = [];
  productUrl:string = 'http://localhost:3000/product'
  orderData:ProductModel[] = [];
  totalPrice:number|null = null
  cartUrl:string = "http://localhost:3000/cart"

  // viewCart(){
  //   return this.productDetails
  // }

   increaseQuantity(data:ProductModel){ 
    data.basePrice = 0;
    data.productQuantity++
    data.basePrice = data.productQuantity * data.productPrice!
    const id1=`${this.cartUrl}/${data.id}`
    return this.http.put<ProductModel[] | cart []>(id1,data)
  }

  decreaseQuantity(data:ProductModel){
    data.basePrice = 0;
    if(data.productQuantity === 1)
    {
        let b = this.productDetails.indexOf(data)
        this.productDetails.splice(b ,1);
        this.http.delete<cart[]>(this.cartUrl + '/' + data.id).subscribe()
    }
    data.productQuantity--;
    data.basePrice = data.productQuantity * data.productPrice!
    const id1=`${this.cartUrl}/${data.id}`
    this.http.put<cart []>(id1,data).subscribe()
  }
  deleteProductFormCart(data:ProductModel){
    data.productQuantity = 0;
    const findIndex = this.productDetails.indexOf(data)
    this.productDetails.splice(findIndex , 1);
    return this.http.delete<cart[]>(this.cartUrl + '/' + data.id)
  }
  calculatePrice(){
   return this.http.get<ProductModel[]>(this.cartUrl)
  }
}
