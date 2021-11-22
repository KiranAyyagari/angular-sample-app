import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
    constructor(private productService: ProductService){}

    errorMessage: string = '';
    sub!: Subscription;

    ngOnInit(): void {
       this.sub = this.productService.getProducts().subscribe({
         next: products => {
           this.products = products;
          this.filteredProducts = this.products;
        },
         error: err => this.errorMessage = err
       });
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    pageTitle: string = 'Product-List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _listFilter: string = '';

    get listFilter(): string{
      return this._listFilter;
    }

    set listFilter(value: string){
      this._listFilter = value;
      console.log('In setter:', value);
      this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [];


    toggleImage(): void{
      this.showImage = !this.showImage;
    }

    performFilter(value: string): IProduct[] {
      value = value.toLowerCase();
      return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(value));   }

    onRatingClicked(message: string): void{
      this.pageTitle = 'Product List: '+message;
    }

}
