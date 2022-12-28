import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @Input() color='';
  @Output() elementRef = new EventEmitter<ElementRef>();

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
    this.elementRef.emit(this.el);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  

}
