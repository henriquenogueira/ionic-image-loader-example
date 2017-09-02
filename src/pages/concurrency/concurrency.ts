import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'concurrency-page'
})
@Component({
  selector: 'page-concurrency',
  templateUrl: 'concurrency.html'
})
export class ConcurrencyPage {

  images: string[] = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      const url = "http://lorempixel.com/1920/1920/abstract/?v=" + Date.now() + i;
      this.images.push(url);
    }
  }

}
