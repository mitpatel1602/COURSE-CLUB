import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { userModel } from 'src/app/MODEL/user.model';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ProductService } from 'src/app/SERVICES/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  addProductToCart:ProductModel[]=[];
  searchProduct:ProductModel[] = [];
  total : number = 0;
  
  
  constructor(private allProduct:ProductService , private cartServices:CartService ){}

  productList:ProductModel[] = [];


  ngOnInit(): void {

    //  this.getProductService()
      this.getproductdata()
    
  }


  // getProductService(){
  //    this.allProduct.getAllTheProduct().subscribe((data:ProductModel[]) =>{
  //      this.productList = data;
  //    })
  // }

  getproductdata(){
    this.allProduct.getdatasevice().subscribe(e=>{
      this.productList = e;      
    })
  }
  addToCartProduct(data:ProductModel){
    this.cartServices.AddProductToCart(data)
  }
  favorite(data:ProductModel){
      this.allProduct.fProduct(data)
  }
  search(event:Event | any){
    let selectedValue = event.target?.value; 
    this.productList =  this.allProduct.filterByCompanyName(selectedValue)
  }
  searchValueChange(event:EvalError | Event | any){
    let selectedValue = event.target.value;
    this.productList =  this.allProduct.filterByCompanyName(selectedValue);
  }
}