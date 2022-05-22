import { Directive, ViewContainerRef, TemplateRef,
  Input, SimpleChange, IterableDiffer, IterableDiffers,
  ChangeDetectorRef, IterableChangeRecord } from "@angular/core";
@Directive({
  selector: "[paForOf]"
})
export class PaIteratorDirective {
  // @ts-ignore
  private differ: IterableDiffer;
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>,
              private differs: IterableDiffers,
              private changeDetector: ChangeDetectorRef) {
  }
  @Input("paForOf")
  dataSource: any;
  ngOnInit() {
    this.differ = this.differs.find(this.dataSource).create
      // @ts-ignore
    (this.changeDetector);
  }
  ngDoCheck() {
    let changes = this.differ.diff(this.dataSource);
    if (changes != null) {
      console.log("ngDoCheck called, changes detected");
      // @ts-ignore
      changes.forEachAddedItem(addition => {
        this.container.createEmbeddedView(this.template,
          new PaIteratorContext(addition.item,
            addition.currentIndex, changes.length));
      });
    }
  }
}
class PaIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;

  constructor(public $implicit: any,
              public index: number, total: number) {
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;
  }
}
// p.401

// import { Directive, ViewContainerRef, TemplateRef,
//   Input, SimpleChange } from "@angular/core";
// @Directive({
//   selector: "[paForOf]"
// })
// export class PaIteratorDirective {
//   constructor(private container: ViewContainerRef,
//               private template: TemplateRef<Object>) {}
//   @Input("paForOf")
//   dataSource: any;
// //   ngOnInit() {
// //     this.container.clear();
// //     for (let i = 0; i < this.dataSource.length; i++) {
// //       this.container.createEmbeddedView(this.template,
// //         new PaIteratorContext(this.dataSource[i],
// //           i, this.dataSource.length));
// //     }
// //   }
// // }
// // // class PaIteratorContext {
// // //   constructor(public $implicit: any) {}
// // // }
// // class PaIteratorContext {
// //   odd: boolean; even: boolean;
// //   first: boolean; last: boolean;
// //   constructor(public $implicit: any,
// //               public index: number, total: number ) {
// //     this.odd = index % 2 == 1;
// //     this.even = !this.odd;
// //     this.first = index == 0;
// //     this.last = index == total - 1;
// //     setInterval(() => {
// //       this.odd = !this.odd; this.even = !this.even;
// //       this.$implicit.price++;
// //     }, 500);
// //   }
//   ngOnInit() {
//     this.updateContent();
//   }
//   ngDoCheck() {
//     console.log("ngDoCheck Called");
//     this.updateContent();
//   }
//   private updateContent() {
//     this.container.clear();
//     for (let i = 0; i < this.dataSource.length; i++) {
//       this.container.createEmbeddedView(this.template,
//         new PaIteratorContext(this.dataSource[i],
//           i, this.dataSource.length));
//     }
//   }
// }
// class PaIteratorContext {
//   odd: boolean; even: boolean;
//   first: boolean; last: boolean;
//   constructor(public $implicit: any,
//               public index: number, total: number ) {
//     this.odd = index % 2 == 1;
//     this.even = !this.odd;
//     this.first = index == 0;
//     this.last = index == total - 1;
//   }
// }
