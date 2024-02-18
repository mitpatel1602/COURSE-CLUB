
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  productUrl:string = 'https://media.istockphoto.com/id/1201462385/vector/abstract-modern-speech-bubble-new-label.jpg?s=612x612&w=0&k=20&c=NkqNBBda-73QvqWCgi5RcifHNgLt7lb5HaDC4FbZ5sw=';
  frvProduct:boolean = true;

  constructor(private router : Router , private addproduct:ProductService){}

  addproductFunctions(){
    this.addproduct.addproduct(this.productName!,this.productDescription!,this.productUrl,this.price!,this.productQuantity,this.frvProduct).subscribe((e)=>{
      if(e)
      {
        alert('Product Added ! ')
        this.router.navigate(['admin'])
      }
    })
  }

}
