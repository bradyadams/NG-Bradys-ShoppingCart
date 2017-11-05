import {Component} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: String = 'Digital';

  cart: Array<any>= [];

  products: Array<any> = [
    {
      name: 'Laptop',
      price: '650',
      internalMemory: '8GB',
      description1: 'Dell',
      description2: '1TB HD, i7Processor',
      canBuy: true,
      offer: 100,
      offerYes: true,
      images: [
        {thumb: '', full: 'images/Dell_Laptop_8GB_1TBHD_i7Processor.jpg'},
        {thumb: '', full: 'images/out-of-stock.png'},
      ],
      reviews: [
      {rating: 5, email: 'j.brady.adams@gmail.com', body: 'Good one'},
      {rating: 3, email: 'b.manish@gmail.com', body: 'Good'}
      ]
    },
    {
      name: 'Mobile',
      price: '1450',
      internalMemory: '64GB',
      description1: 'iPhone 8',
      description2: 'Rose Gold',
      canBuy: false,
      images: [
        {thumb: '', full: 'images/iPhone-8-64GB.png'},
        {thumb: '', full: 'images/out-of-stock.png'},
      ],
      reviews: [
      {rating: 4, email: 'barathadams2000@yahoo.com', body: 'Good stuff'},
      {rating: 3, email: 'bradyadams@rediffmail.com.com', body: 'Good'}
      ]
    }
  ];

  buy(event: any): void {
    console.log('App.component ' + event.item.name);
    this.cart.push(event.item);
  }


}
