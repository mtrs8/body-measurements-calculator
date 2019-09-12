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
  iac;

  calculaIAC(quadril, altura): void{
    let alturaM = (altura / 100)
    let aux = Math.sqrt(alturaM);
    console.log(aux);
    let aux2 = aux * altura;
    this.iac = (quadril / aux2) - 18;
  }

}
