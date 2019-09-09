import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-i-accalculator',
  templateUrl: 'i-accalculator.html'
})
export class IACCalculatorPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  percentGordura;

  calculaIAC(quadril, altura): void{
    let aux = Math.sqrt(altura) * altura;
    this.percentGordura = (quadril / aux) - 18;
  }

}
