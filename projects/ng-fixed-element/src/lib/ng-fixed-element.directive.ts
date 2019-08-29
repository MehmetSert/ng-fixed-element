import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[ngFixedElement]'
})
export class NgFixedElementDirective {

  @Input() marginTop: number = 0;

  constructor(
    private elementRef: ElementRef
  ) {
    const divBlock = document.createElement('div');
    divBlock.classList.add('ms-fixed-element-container');
    this.elementRef.nativeElement.parentNode.prepend(divBlock);
    divBlock.appendChild(this.elementRef.nativeElement);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const parentNode = this.elementRef.nativeElement.parentNode;
    const elementOffsetTop = parentNode.parentNode.offsetTop;
    const scrollTop = document.documentElement.scrollTop;
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
