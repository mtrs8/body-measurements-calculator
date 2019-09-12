import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-i-mccalculator',
  templateUrl: 'i-mccalculator.html'
})
export class IMCCalculatorPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  resultIMC;


  calculaIMC(peso, altura): void{
    let alturaM = (altura / 100)
    let resultado = peso / (alturaM * alturaM)
    this.resultIMC = parseFloat(resultado.toFixed(2))
    console.log(this.resultIMC)
  }

}
