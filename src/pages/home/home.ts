import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from "../add-item/add-item";

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showAddListPage() {
    this.navCtrl.push(AddItemPage);
  }

  viewShop(){
    console.log('----');
  }

}
