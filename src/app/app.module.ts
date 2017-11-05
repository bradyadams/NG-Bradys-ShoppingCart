import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { PriceDiscountPipe } from './price-discount.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PriceDiscountPipe, ProductListComponent, ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
