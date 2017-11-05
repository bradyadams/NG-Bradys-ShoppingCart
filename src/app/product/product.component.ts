import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: any;

  tab: Number= 1;

  @Output()
  buy = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeTab(tabIdx: number, event: any) {
    event.preventDefault();
    this.tab = tabIdx;
  }

  isTabSelected(tabIdx: number) {
    return this.tab === tabIdx;
  }

  handleBuyClick(event: any, product: any): void {
    console.log( 'User is Buying...' + product.name);
    console.dir(event);
    this.buy.emit({item: product});
  }

}
