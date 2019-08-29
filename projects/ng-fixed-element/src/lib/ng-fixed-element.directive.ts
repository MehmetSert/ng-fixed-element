import {Directive, ElementRef, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[ngFixedElement]'
})
export class NgFixedElementDirective {

  @Input() marginTop: number = 0;

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    const divBlock = this.document.createElement('div');
    divBlock.classList.add('ms-fixed-element-container');
    this.elementRef.nativeElement.parentNode.prepend(divBlock);
    divBlock.appendChild(this.elementRef.nativeElement);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const parentNode = this.elementRef.nativeElement.parentNode;
    const elementOffsetTop = parentNode.parentNode.offsetTop;
    const scrollTop = this.document.documentElement.scrollTop;
    if (scrollTop >= elementOffsetTop) {
      parentNode.classList.add('ms-fixed');
      parentNode.style.width = parentNode.parentNode.clientWidth + 'px';
      parentNode.style.top = this.marginTop + 'px';
    } else {
      parentNode.classList.remove('ms-fixed');
      parentNode.style.width = 'auto';
      parentNode.style.top = '';
    }
  }

}
