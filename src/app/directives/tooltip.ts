import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare var bootstrap: any
@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnInit {
  @Input() tooltip!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    let el = this.el.nativeElement;
    el.setAttribute('data-bs-toggle', 'tooltip');
    el.setAttribute('data-bs-title', this.tooltip);
    el.removeAttribute('tooltip');
    new bootstrap.Tooltip(el);
  }
}
