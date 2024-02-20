
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { ProductService } from 'src/app/SERVICES/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  productName:string|null = null;
  productDescription:string|null = null;
  price:number|null = null;
  productQuantity:number = 0;
  basePrice:number = 0;
  productUrl:string = '';
  frvProduct:boolean = false;

  productDetail:ProductModel[] = []

  constructor(private router : Router , private addproduct:ProductService){}

  addproductFunctions(){
    let name = this.productName
    let des = this.productDescription
    let price = this.price
      this.addproduct.addproduct(name!,des!,this.productUrl,price!,this.productQuantity,this.frvProduct).subscribe((e)=>{
        if(e){
          alert('Product Added !')
          this.router.navigate(['admin'])
          return
        }
      })
  }

}
