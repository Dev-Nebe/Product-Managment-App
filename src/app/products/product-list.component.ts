import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
    // tslint:disable-next-line: no-inferrable-types
    pageTitle: string = 'Product List';
    // tslint:disable-next-line: no-inferrable-types
    imageWidth: number = 50;
    // tslint:disable-next-line: no-inferrable-types
    imageMargin: number = 2;
    // tslint:disable-next-line: no-inferrable-types
    showImage: boolean = false;
    errorMessage: string;
    // tslint:disable-next-line: no-inferrable-types
    _listFilter: string;

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [];

      constructor(private productService: ProductService) {
      }

      onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
      }

      performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      toggleImage(): void {
          this.showImage = !this.showImage;
      }

      ngOnInit(): void {
        this.productService.getProducts().subscribe({
          next: products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error: err => this.errorMessage = err
        });
      }
}
