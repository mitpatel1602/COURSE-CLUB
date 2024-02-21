import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { cart } from 'src/app/MODEL/cart.model';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{



  isActive:boolean = true;
  id : number | string = '';
  productId:number | null = null;
  productName:string|any = null;
  productDescription:string|null = null;
  price:number|null = null;
  productQuantity:number = 1;
  basePrice:number = 0;
  counter:number = 1;
  frvProduct:boolean = false;
  productUrl : string = "http://localhost:3000/product";
  productImg:string = '';
  productDetails:ProductModel[] = []
  cartUrl:string = 'http://localhost:3000/cart'
  data:cart[] | ProductModel[]= [];

  constructor(private router:ActivatedRoute , private http:HttpClient , private cartServices:CartService){}

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(params=>{
        this.id = params.get('id')!
    })
    this.http.get<ProductModel[]>(this.productUrl).subscribe((item)=>{
      item.forEach(d=>{
        if(this.id == d.id){
          this.productId = d.id;
          this.productName = d.productName,
          this.productDescription = d.productDescription,
          this.productImg = d.productString!,
          this.price = d.productPrice,
          this.basePrice! = this.price!,
          this.productQuantity = d.productQuantity
        }
      })
    })
  }
  increaseQuantity(){
    // let id = this.id
    // this.cartServices.increaseQuantity()
    this.basePrice = 0;
    this.counter += 1;
    this.isActive = true;
    this.basePrice = this.price! * this.counter
  }
  decreaseQuantity(){
    if(this.counter !== 1)
    {
      this.basePrice = 0;
      this.counter -= 1;
      this.isActive = true;
      this.basePrice = this.price! * this.counter
    }
    else{
      this.counter = 0;
      this.isActive = false;
      this.basePrice = this.price! * this.counter
    }
  }
  addToCartProduct(){
    // let id = this.productId
    // this.cartServices.addProductFromDetail(id!)
  }

}
