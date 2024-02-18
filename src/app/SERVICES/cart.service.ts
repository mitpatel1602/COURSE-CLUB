import { Injectable } from '@angular/core';
import { ProductModel } from '../MODEL/Product.model';
import { HttpClient } from '@angular/common/http';
import { userModel } from '../MODEL/user.model';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient , private logUser:AuthService) { }

  productDetails:ProductModel[] = [];
  productUrl:string = 'http://localhost:3000/product'
  orderData:ProductModel[] = [];
  totalPrice:number|null = null
  addToCartProduct:string = 'http://localhost:3000/addTocart'


  AddProductToCart(data:ProductModel){
        
    if(data.productQuantity === 0){
      data.basePrice = 0;
      this.productDetails.push(data);
      data.productQuantity++;
      data.basePrice = data.productPrice;
      // return this.http.post<ProductModel[]>(this.addToCartProduct,this.productDetails)
    }
    else if(data.productQuantity !== 0)
    { 
      console.log(data.productQuantity);
      data.productQuantity++;
      data.basePrice = data.productQuantity * data.productPrice!
    }
  }


  viewCart(){
    return this.productDetails
  }

  increaseQuantity(data:ProductModel){ 
    data.basePrice = 0;
    data.productQuantity++
    data.basePrice = data.productQuantity * data.productPrice!
  }

  decreaseQuantity(data:ProductModel) : boolean{
    data.basePrice = 0;
    if(data.productQuantity === 1)
    {
        let b = this.productDetails.indexOf(data)
        this.productDetails.splice(b ,1);
    }
    data.productQuantity--;
    data.basePrice = data.productQuantity * data.productPrice!
    return true
  }

  deleteProductFormCart(data:ProductModel){
    data.productQuantity = 0;
    const findIndex = this.productDetails.indexOf(data)
    this.productDetails.splice(findIndex , 1);
  }
}
