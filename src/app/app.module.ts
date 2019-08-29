import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgFixedElementModule} from '../../projects/ng-fixed-element/src/lib/ng-fixed-element.module';
import {AppRoutingModule} from './app-routing.module';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFixedElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
