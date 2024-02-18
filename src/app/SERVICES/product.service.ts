import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../MODEL/Product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private router:Router,private http:HttpClient) { }

  
  productImg:string = 'https://media.istockphoto.com/id/1201462385/vector/abstract-modern-speech-bubble-new-label.jpg?s=612x612&w=0&k=20&c=NkqNBBda-73QvqWCgi5RcifHNgLt7lb5HaDC4FbZ5sw=';
  product:number | null = 0
  idValue:number = 0;
  productUrl:string ='http://localhost:3000/product'

  favoriteProduct:ProductModel[] = [];

      allProduct:ProductModel[] = [
          {
              productId:this.idValue++,
              productName:'xyz',
              productDescription:'Highly proficient in Web3 and AI and professional in Designing Websites with tools of Web3.0.',
              productString: this.productImg,
              productPrice:120,
              productQuantity:0
          },

          {
              productId:this.idValue++,
              productName:'qrt',
              productDescription:'A professional web designer with a wealth of knowledge about the web Development and software',
              productString:this.productImg,
              productPrice:140,
              productQuantity:0
          },
          {
              productId:this.idValue++,
              productName:'abc',
              productDescription:'Expert in all aspects of coding and knowledgeable about a wide range of coding languages',
              productString:this.productImg,
              productPrice:160,
              productQuantity:0
          },
          {
              productId:this.idValue++,
              productName:'MMM',
              productDescription:'Expert in all aspects of coding and knowledgeable about a wide range of coding languages',
              productString:this.productImg,
              productPrice:180,
              productQuantity:0
             
          }
          
      ]

      // getAllTheProduct(){
      //       return new Observable<ProductModel[]>((sub)=>{
      //         setTimeout(()=>{
      //           sub.next(this.allProduct)
      //         })
      //       })
      // }

      addproduct(name:string , des:string , url:string ,price : number , quantity:number,frv:boolean){
            return this.http.post<ProductModel[]>('http://localhost:3000/product',{name,des,url,price,quantity,frv})
            
      }
      getdatasevice(){
        return this.http.get<ProductModel[]>(this.productUrl)
      }

      

      fProduct(data:ProductModel) : boolean{
        if(data.favProduct === true){
          data.favProduct = false
          let a =  this.favoriteProduct.indexOf(data)
          this.favoriteProduct.splice(a , 1);
        }
        else{
         data.favProduct = true;
         this.favoriteProduct.push(data);
        }
        if(this.favoriteProduct.length === 0){
          return true
        }
        else{
          return false
        }
        
      }

      wishListProduct(){
        return this.favoriteProduct;
      }

      filterByCompanyName(filterBy:string | any){


        if(filterBy?.toLowerCase() === ' ' || filterBy === '  ' || filterBy?.length === 0)
        {
            return this.allProduct;
        }
        else
        {  
        return this.allProduct.filter((com)=>{
        return  com.productName?.toLowerCase() === filterBy?.toLowerCase(); 
        })
        }
      }
}
function axios(arg0: { method: string; url: string; }) {
  throw new Error('Function not implemented.');
}

