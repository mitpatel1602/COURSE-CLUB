import { AddproductComponent } from './../ADMIN/addproduct/addproduct.component';
import { Injectable } from '@angular/core';
import { ProductModel } from '../MODEL/Product.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';


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
  addToCartProduct:string = 'http://localhost:3000/addTocart'


  AddProductToCart(data:ProductModel){
   
  }

  AddViewPageProduct(data : ProductModel[]){
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

  serviceFor(id1:string | number){
    this.http.get<ProductModel[]>(this.productUrl).subscribe(data=>{
      data.forEach(s=>{
        if(this.id === s.id){
           console.log(this.id);
            return
        }
      });
  }) 
  }
}
