import { NgModule } from '@angular/core';
import { NgFixedElementComponent } from './ng-fixed-element.component';
import { NgFixedElementDirective } from './ng-fixed-element.directive';



@NgModule({
  declarations: [NgFixedElementComponent, NgFixedElementDirective],
  imports: [
  ],
  exports: [NgFixedElementComponent, NgFixedElementDirective]
})
export class NgFixedElementModule { }
