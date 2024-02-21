import { NgModule } from '@angular/core';
export class cart{
    id:number | null = null;
    productName:string | null = null
    productPrice:number | null = null;
    basePrice?:number|null = null;
    productString : string | null = null;
    productDescription : string | null = null;
    productQuantity : number = 0;
    favProduct?:boolean = true;
    productId:number | null = null;
    userId:number | null = null;
}