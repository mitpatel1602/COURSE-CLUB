import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/MODEL/Product.model';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  

  orderData:ProductModel[] = [];

  constructor(private cartServices:CartService){}

  ngOnInit(): void {
       this.orderData = JSON.parse(localStorage.getItem('orders')!);
  }

}
