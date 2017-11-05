import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Array<any>;

  @Output()
  buy= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buyHandler($event) {
    console.log('Product List: ' + $event.item.name);
    this.buy.emit($event);
  }

}
