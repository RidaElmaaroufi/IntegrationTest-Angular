import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() appHighlight = '';

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = this.appHighlight;
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'green');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
