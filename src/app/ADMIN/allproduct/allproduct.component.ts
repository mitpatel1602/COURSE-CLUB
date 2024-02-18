import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { ProductService } from 'src/app/SERVICES/product.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
 
  productDetail:ProductModel[] = [];

  constructor(private products:ProductService , private router : Router){}
 
  ngOnInit(): void {

    this.getProduct()

  }

  getProduct(){
    this.products.getdatasevice().subscribe((e)=>{
      this.productDetail = e;
    })
  }


  deleteProduct(data:ProductModel){
  }

}
