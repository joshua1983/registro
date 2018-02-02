import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewReunionPage } from '../new-reunion/new-reunion';


/**
 * Generated class for the ReunionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reuniones',
  templateUrl: 'reuniones.html',
})
export class ReunionesPage {
  fechaHoy: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fechaHoy = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReunionesPage');
  }

  nuevaReunion(){
    this.navCtrl.push(NewReunionPage);
  }

}
