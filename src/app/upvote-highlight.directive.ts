import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appUpvoteHighlight]'
})
export class UpvoteHighlightDirective {

  constructor(private elem: ElementRef) { }

  private highlight(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }

}
