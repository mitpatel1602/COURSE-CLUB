
import { userModel } from './../../MODEL/user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ProductService } from 'src/app/SERVICES/product.service';
import { cart } from 'src/app/MODEL/cart.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  searchProduct:ProductModel[] = [];
  users:userModel[] = [];
  // cartData:cart[] | any= [];
  isAdded:boolean = true;
  
  
  constructor(private allProduct:ProductService , private cartServices:CartService , private router : Router , private http:HttpClient){}

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
      // console.log(this.productList);
    })
  }
  addToCartProduct(data:ProductModel){
   if(!(localStorage.getItem('LoginUser'))){
         alert('please login ')
  }else{
    this.allProduct.addProductToCart(data)
  }

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
  viewProduct(data:ProductModel){
      this.router.navigate(['nav/viewproduct'],{queryParams:{id:data.id}})
  }
}