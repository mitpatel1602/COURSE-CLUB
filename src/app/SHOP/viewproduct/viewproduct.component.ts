import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{



  isActive:boolean = true;
  id : number | string = '';
  productName:string|any = null;
  productDescription:string|null = null;
  price:number|null = null;
  productQuantity:number = 1;
  basePrice:number = 0;
  counter:number = 1;
  frvProduct:boolean = false;
  productUrl : string = "http://localhost:3000/product";
  productImg:string = 'https://media.istockphoto.com/id/1201462385/vector/abstract-modern-speech-bubble-new-label.jpg?s=612x612&w=0&k=20&c=NkqNBBda-73QvqWCgi5RcifHNgLt7lb5HaDC4FbZ5sw=';
  productDetails:ProductModel[] = []

  constructor(private router:ActivatedRoute , private http:HttpClient , private cartServices:CartService){}

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(params=>{
        this.id = params.get('id')!
    })
    this.http.get<ProductModel[]>(this.productUrl).subscribe((item)=>{
      item.forEach(d=>{
        if(this.id == d.id){
          this.productName = d.productName,
          this.productDescription = d.productDescription,
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
     
  }

}
