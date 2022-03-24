import { Component } from '@angular/core';
import { ProductService } from '../app/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list:Product[]=[];
  value: string = "";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  onClick() {
    this.getProduct()
  }

  getProduct(){
    this.productService.getAll(this.value).subscribe((res:any)=>{
      this.list = res.top_result
    })
  }
}
