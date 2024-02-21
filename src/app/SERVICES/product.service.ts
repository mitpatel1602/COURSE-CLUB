import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../MODEL/Product.model';
import { HttpClient } from '@angular/common/http';
import { cart } from '../MODEL/cart.model';
import { userModel } from '../MODEL/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private router:Router,private http:HttpClient) { }

  
  productImg:string = 'https://media.istockphoto.com/id/1201462385/vector/abstract-modern-speech-bubble-new-label.jpg?s=612x612&w=0&k=20&c=NkqNBBda-73QvqWCgi5RcifHNgLt7lb5HaDC4FbZ5sw=';
  product:number | null = 0
  idValue:number = 0;
  users:userModel[] = [];
  productUrl:string ='http://localhost:3000/product'
  cartUrl:string = "http://localhost:3000/cart";
  productDetails:cart[] = [];
  userId:number|null = null;


  favoriteProduct:ProductModel[] = [];

      allProduct:ProductModel[] = [
          {
              id:this.idValue++,
              productName:'xyz',
              productDescription:'Highly proficient in Web3 and AI and professional in Designing Websites with tools of Web3.0.',
              productString: this.productImg,
              productPrice:120,
              productQuantity:0
          },
          {
              id:this.idValue++,
              productName:'qrt',
              productDescription:'A professional web designer with a wealth of knowledge about the web Development and software',
              productString:this.productImg,
              productPrice:140,
              productQuantity:0
          },
          {
              id:this.idValue++,
              productName:'abc',
              productDescription:'Expert in all aspects of coding and knowledgeable about a wide range of coding languages',
              productString:this.productImg,
              productPrice:160,
              productQuantity:0
          },
          {
              id:this.idValue++,
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
      addproduct(productName:string , productDescription:string , productString:string , productPrice:number , productQuantity:number , favProduct:boolean){
        productString = this.productImg      
        return this.http.post(this.productUrl,{productName,productDescription,productString,productPrice,productQuantity,favProduct})
      }
      getdatasevice(){
        return this.http.get<ProductModel[]>(this.productUrl)
      }
      editProductDetail(id:string | number , name:string , des:string , price:number){
          const id1=`${this.productUrl}/${id}`
          return this.http.put<ProductModel[]>(id1,{productName:name,productDescription:des,productString:this.productImg,productPrice:price,productQuantity:0,favProduct:false});
      }
      addProductToCart(data:ProductModel){
        let userId = this.getId()   
        let cartData:cart = {
              ...data,
              userId,
              productId : data.id,
              basePrice : data.productPrice
            }  
            this.addToCart(cartData)
      }
      getId(){
        this.users = JSON.parse(localStorage.getItem('LoginUser')!)
        let userId:number;
        this.users.filter((s)=>{
          userId = s.id!   
        })
        return userId!;
      }
      addToCart(cartData:cart | ProductModel){

          let userId = this.getId()
          this.http.get<cart>(this.cartUrl).subscribe((product)=>{
          
           if(userId === product.userId)
          {
            // console.log(product.userId);
            // console.log(userId);
            cartData.basePrice = 0;
            cartData.productQuantity++
            cartData.basePrice = cartData.productQuantity * cartData.productPrice!
            const id1=`${this.cartUrl}/${cartData.id}`
            // this.http.put<ProductModel[] | cart []>(id1,cartData).subscribe((x)=>{
            //     if(x){
            //       alert('Product is Already Added !');
            //     }
            // })
          }
          else if(userId !== product.userId){
            // console.log(product.userId);
            // console.log(userId);
            
             this.http.post<cart[]>('http://localhost:3000/cart',cartData).subscribe((p)=>{
              if(p){
                alert('product Added')
              }
            })
          }
        })
       }
      returnProductToCart(){
          return this.http.get<cart[]>(this.cartUrl)
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
      deleteProduct(data:ProductModel){
          console.log(data.id);
          return this.http.delete<ProductModel[]>(this.productUrl + '/' + data.id)
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

      bookOrder(){
        return this.http.get<cart>(this.cartUrl)
      }
      getOrder(){
        return this.http.get<cart>("http://localhost:3000/order")
      }
}


