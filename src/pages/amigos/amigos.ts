import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AmigosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amigos',
  templateUrl: 'amigos.html',
})
export class AmigosPage {
  amigos: Array<{nombre: string, foto: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.amigos = [
      { nombre: "Josue", foto: "http://lorempixel.com/82/82/"},
      { nombre: "Joselin", foto: "http://lorempixel.com/82/82/" }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmigosPage');
  }

}
