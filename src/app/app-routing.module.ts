import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Demo1Component} from './components/demo1/demo1.component';
import {Demo2Component} from './components/demo2/demo2.component';
import {Demo3Component} from './components/demo3/demo3.component';

const routes: Routes = [
  { path: '', component: Demo1Component },
  { path: 'demo-2', component: Demo2Component },
  { path: 'demo-3', component: Demo3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
