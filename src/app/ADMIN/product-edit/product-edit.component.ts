import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/SERVICES/product.service';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/app/MODEL/Product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id : string | number = '';
  productName:string|any = null;
  productDescription:string|null = null;
  price:number|null = null;
  productQuantity:number = 0;
  basePrice:number = 0;
  // productUrl:string = '';
  frvProduct:boolean = false;
  productUrl : string = "http://localhost:3000/product";

  constructor(private products:ProductService , private Router :ActivatedRoute , private http : HttpClient){}

  ngOnInit(): void {
    this.Router.queryParamMap.subscribe(params => {
          this.id = params.get('id')!  
    });    
    this.http.get<ProductModel[]>(this.productUrl).subscribe(data=>{
      data.forEach(s=>{
        if(this.id === s.id){
            this.productName = s.productName;
            this.productDescription = s.productDescription
            this.price = s.productPrice
            return
        }
      });
  }) 
}
 

  editProductDetail(){

          this.products.editProductDetail(this.id,this.productName!,this.productDescription!,this.price!).subscribe((e)=>{
            if(e){
              alert('Product Details Updated !')
            }
          })
  }

}
