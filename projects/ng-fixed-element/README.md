<p align="center">
  <h1 align="center">Angular Fixed Element</h1>
</p>
<p align="center">This Angular plug-in allows you to keep items on the page at the top.</p>

------------

## Demo
[Click here](https://stackblitz.com/edit/ng-fixed-element "buraya tıklayın") for a live demo.

## Installation
You can use npm to install the package.

###### NPM
```
npm install --save ng-fixed-element
```

## Use
Follow the steps below to add the ng-fixed-element package to your project.

**1.  Import NgFixedElementModule**
Import NgFixedElementModule in the module you want to use in your application.
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the module */
import {NgFixedElementModule} from 'ng-fixed-element';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFixedElementModule // Import here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**2.  Use within HTML**
Give the ngFixedElement directive to the object you want to fix. Example;
```html
<div class="sidebar" ngFixedElement [marginTop]="10">
  <ul>
    <li>Sidebar Item 1</li>
    <li>Sidebar Item 2</li>
    <li>Sidebar Item 3</li>
    <li>Sidebar Item 4</li>
    <li>Sidebar Item 5</li>
    <li>Sidebar Item 6</li>
  </ul>
</div>
```
If you do not want to give a space above, you can remove the [marginTop] property, which will be 0 by default.


## Features
| Name | Type | Required | Default | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| marginTop | Number  | No | 0 | Sets the spacing of the pinned object from above. |

## Author
[Mehmet Sert](https://mehmetsert.com.tr "Mehmet Sert")
- [Github/MehmetSert](https://github.com/MehmetSert "Github/MehmetSert")
- [Linkedin/mehmet-sert](https://www.linkedin.com/in/mehmet-sert/ "Linkedin/mehmet-sert")
- [Twitter/mehmetsert_11](https://twitter.com/mehmetsert_11 "Twitter/mehmetsert_11")
- [Instagram/mehmetsert_11](https://www.instagram.com/mehmetsert_11/ "Instagram/mehmetsert_11")
- [Kodumunblogu/mehmet-sert-11](https://kodumunblogu.net/auth/mehmet-sert-11 "Kodumunblogu/mehmet-sert-11")
