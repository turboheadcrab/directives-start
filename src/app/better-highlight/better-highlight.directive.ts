import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input()
  defaultColor = 'transparent';

  @Input('appBetterHighlight')
  highlightColor = 'blue';

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor /*private elementRef: ElementRef,
    private renderer: Renderer2*/() {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'gray'
    );*/
  }

  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    );*/
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );*/
    this.backgroundColor = this.defaultColor;
  }
}
