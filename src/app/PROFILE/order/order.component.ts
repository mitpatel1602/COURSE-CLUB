import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { cart } from 'src/app/MODEL/cart.model';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ProductService } from 'src/app/SERVICES/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  productList:cart[] = []
  isActive:boolean = false;

  constructor(private allProduct:ProductService){}
  ngOnInit(): void {
    this.getOrderData()
    this.isEmpty()
  }
  getOrderData(){
        this.allProduct.getOrder().subscribe((e)=>{
            this.productList.push(e);  
        })
    }
  isEmpty(){
    if(this.productList.length === 0){
      this.isActive = true;
      return
    }
  }
}
