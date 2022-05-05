import { Component } from '@angular/core';
import { Model } from "./repository.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model: Model = new Model();
  // getClasses(): string {
  //   return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
  // }
  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    // @ts-ignore
    return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }
}
