import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FotografiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fotografia',
  templateUrl: 'fotografia.html',
})
export class FotografiaPage {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
    this.items = afDB.list('post').valueChanges();
    
    console.log(this.items);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotografiaPage');
  }

}
