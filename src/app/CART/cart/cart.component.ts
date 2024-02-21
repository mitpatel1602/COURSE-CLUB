import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { ProductService } from 'src/app/SERVICES/product.service';
import { CartService } from 'src/app/SERVICES/cart.service';
import { userModel } from 'src/app/MODEL/user.model';
import { cart } from 'src/app/MODEL/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  productDetails:cart[] = [];
  totalPrice:number = 0;
  userDetail:userModel[] = [];


  constructor(private router:Router , private cartService:CartService , private productService:ProductService , private http : HttpClient){}

  ngOnInit() {
    this.viewProduct()
    // this.calculatePrice()
  }
  ngOnChange(){
    // this.calculatePrice()
    this.viewProduct()
    this.ngOnInit()
  }
  viewProduct(){
    this.userDetail = JSON.parse(localStorage.getItem('LoginUser')!)
    let id : number;
    this.userDetail.filter((f)=>{
          id = f.id!;
    })
      this.productService.returnProductToCart().subscribe((data)=>{
        data.forEach((t)=>{
          if(id === t.userId){
            this.productDetails = data
          }
        })
      })
  }
  increaseQuantity(data:ProductModel ){
    this.cartService.increaseQuantity(data).subscribe()  
    this.cartService.calculatePrice().subscribe(data=>{
      data.forEach((t)=>{
        this.totalPrice! += t.basePrice!
      })
    })
  }
  decreaseQuantity(data:ProductModel){
    this.cartService.decreaseQuantity(data)
    this.cartService.calculatePrice().subscribe(data=>{
      data.forEach((t)=>{
        this.totalPrice! -= t.basePrice!
      })
    })
  }
  deleteProductFormCart(data:ProductModel){
    this.cartService.deleteProductFormCart(data).subscribe(()=>{
      this.productDetails = this.productDetails.filter((x)=>{
          return x.id !== data.id 
      })
      this.cartService.calculatePrice().subscribe(data=>{
        data.forEach((t)=>{
          this.totalPrice! = t.basePrice!
        })
      })

    })
  }
  orderBook(){
    this.productService.bookOrder().subscribe((data)=>{
            this.http.post<cart>("http://localhost:3000/order",data).subscribe(()=>{
              alert('order Success')
            })
        let b = this.productDetails.indexOf(data)
        this.productDetails.splice(b ,1);
        this.http.delete<cart[]>("http://localhost:3000/cart" + '/' + data.id).subscribe()
    })
  }
}
