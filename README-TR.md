<p align="center">
  <h1 align="center">Angular Fixed Element</h1>
</p>
<p align="center">Bu Angular eklentisi, sayfadaki öğeleri üstte tutmanızı sağlar.</p>

------------

## Demo
Canlı demo için [buraya tıklayın](https://stackblitz.com/edit/ng-fixed-element "buraya tıklayın").

## Kurulum
Paketi yüklemek için npm'i kullanabilirsiniz.

###### NPM
```
npm install --save ng-fixed-element
```

## Kullanım
Projenize ng-fixed-element paketini eklemek için aşağıdaki adımları izleyin.

**1.  NgFixedElementModule'yi import edin.**
NgFixedElementModule'yi uygulamanızda kullanmak istediğiniz modülde içe aktarın.
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

**2.  HTML içinde kullanın**
Sabitlemek istediğiniz nesneye ngFixedElement direktifini verin. Örnek;
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
Yukarıdan boşluk vermek istemiyorsanız [marginTop] özelliğini kaldırabilirsiniz, varsayılan olarak 0 olacaktır.


## Özellikler
| İsim | Tip | Zorunlu | Varsayılan | Açıklama |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| marginTop | Number  | Hayır | 0 | Sabitlenen nesnenin yukarıdan boşluğunu ayarlar. |

## Paylaşan
[Mehmet Sert](https://mehmetsert.com.tr "Mehmet Sert")
- [Github/MehmetSert](https://github.com/MehmetSert "Github/MehmetSert")
- [Linkedin/mehmet-sert](https://www.linkedin.com/in/mehmet-sert/ "Linkedin/mehmet-sert")
- [Twitter/mehmetsert_11](https://twitter.com/mehmetsert_11 "Twitter/mehmetsert_11")
- [Instagram/mehmetsert_11](https://www.instagram.com/mehmetsert_11/ "Instagram/mehmetsert_11")
- [Kodumunblogu/mehmet-sert-11](https://kodumunblogu.net/auth/mehmet-sert-11 "Kodumunblogu/mehmet-sert-11")
