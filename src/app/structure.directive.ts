import {
  Directive, SimpleChange, ViewContainerRef, TemplateRef, Input
} from "@angular/core";
@Directive({
  selector: "[paIf]"
})
export class PaStructureDirective {
  expressionResult: boolean;
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>) {
    this.expressionResult = true;
  }
  @Input("paIf")

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["expressionResult"];
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
