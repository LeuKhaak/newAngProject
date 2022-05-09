import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  newProduct: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }
  // getValidationMessages(state: any, thingName?: string) {
  //   let thing: string = state.path || thingName;
  //   let messages: string[] = [];
  //   if (state.errors) {
  //     for (let errorName in state.errors) {
  //       switch (errorName) {
  //         case "required":
  //           messages.push(`You must enter a ${thing}`);
  //           break;
  //         case "minlength":
  //           messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
  //           break;
  //         case "pattern":
  //           messages.push(`The ${thing} contains illegal characters`);
  //           break;
  //       }
  //     }
  //   }
  //   return messages;
  // }
  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
  // getFormValidationMessages(form: NgForm): string[] {
  //   let messages: string[] = [];
  //   Object.keys(form.controls).forEach(k => {
  //     this.getValidationMessages(form.controls[k], k)
  //       .forEach(m => messages.push(m));
  //   });
  //   return messages;
  // }
}

//import { ApplicationRef, Component } from "@angular/core";
//import { Model } from "./repository.model";
//import { Product } from "./product.model";
//@Component({
//  selector: "app-root",
//  templateUrl: "app.component.html"
//})
//export class AppComponent {
//  model: Model = new Model();
//  constructor(ref: ApplicationRef) {
//    (<any>window).appRef = ref;
//    (<any>window).model = this.model;
//  }
//  getProductByPosition(position: number): Product {
//    return this.model.getProducts()[position];
//  }
//  getProduct(key: any): any {
//    return this.model.getProduct(key);
//  }
//  getProducts(): Product[] {
//    return this.model.getProducts();
//  }
//  getProductCount(): number {
//		console.log("getProductCount invoked");
//    return this.getProducts().length;
//  }
//  targetName: string = "Kayak";
//  getKey(index: number, product: Product) {
//    return product.id;
//  }
//	counter: number = 1;
//	get nextProduct(): any {
//		return this.model.getProducts().shift();
//	}
//	getProductPrice(index: any): any {
//		return Math.floor(this.getProduct(index).price);
//	}
//}


// import { ApplicationRef, Component } from "@angular/core";
// import { Model } from "./repository.model";
// import { Product } from "./product.model";
// @Component({
//   selector: "app",
//   templateUrl: "app.component.html"
// })
// export class AppComponent {
//   model: Model = new Model();
//   constructor(ref: ApplicationRef) {
//     (<any>window).appRef = ref;
//     (<any>window).model = this.model;
//   }
//   getProductByPosition(position: number): any {
//     return this.model.getProducts()[position];
//   }
//   getClassesByPosition(position: number): string {
//     let product = this.getProductByPosition(position);
//     return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
//   }
//}



// import { Component } from '@angular/core';
// import { Model } from "./repository.model";
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   model: Model;
//   constructor() {
//     this.model = new Model()
//     //console.log(this.model)
//   }
//
//   // getClasses(): string {
//   //   return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
//   // }
//   getClasses(key: number): string {
//     let product = this.model.getProduct(key);
//     if (product && product.price) {
//       return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
//     } else return '';
//   }
//
//   getClassMap(key: number): Object {
//     let product = this.model.getProduct(key);
//     return {
//       "text-xs-center bg-danger": product.name == "Kayak",
//       "bg-info": product.price < 50
//     };
//   }
//   fontSizeWithUnits: string = "30px";
//   fontSizeWithoutUnits: string= "30";
//
//   getStyles(key: number) {
//     let product = this.model.getProduct(key);
//     return {
//       fontSize: "30px",
//       "margin.px": 100,
//       color: product.price > 50 ? "red" : "green"
//     };
//   }
//
// }
