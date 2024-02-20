import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { ProductService } from 'src/app/SERVICES/product.service';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private router:Router , private cartService:CartService){}
 
  productDetails:ProductModel[] = [];
  isActive:boolean = true;
  isAllow:boolean = false;
  totalPrice:number | null = null;

 
  ngOnInit() {
    this.productDetails = this.cartService.viewCart()
    if(this.productDetails.length === 0){
      this.isAllow = true;
    }
  }
  increaseQuantity(data:ProductModel ){
    this.cartService.increaseQuantity(data)
  }

  ngOnChange(){
    this.calculatePrice()
  }

  decreaseQuantity(data:ProductModel){
    this.isActive = this.cartService.decreaseQuantity(data)
    this.ngOnInit()
  }
  
  deleteProductFormCart(data:ProductModel){
    this.cartService.deleteProductFormCart(data)
    this.ngOnInit()
  }

  calculatePrice(){
      this.productDetails.filter((e)=>{
          this.totalPrice! += e.productPrice!;
      })
  }

}
