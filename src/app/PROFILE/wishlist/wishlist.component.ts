import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { ProductService } from 'src/app/SERVICES/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  productList:ProductModel[] = []
  isActive:boolean = false;

  constructor(private allProduct:ProductService){}

  ngOnInit(): void {

    this.productList = this.allProduct.wishListProduct()
    
    this.isEmpty()
  }

  isEmpty(){
    if(this.productList.length === 0){
      this.isActive = true;
      return
    }

  }
  favorite(data:ProductModel){
  this.isActive =   this.allProduct.fProduct(data)
}

}
