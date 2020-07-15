import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }
  @Input('appTimes') set render(times: number) {  //  ('appTimes') = input aliasing
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {}); // to get access to templateRed properties use {index: i} and refrence 'index' in the directive call
    }
  }
}

