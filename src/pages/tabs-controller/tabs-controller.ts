import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IACCalculatorPage } from '../i-accalculator/i-accalculator';
import { AboutPage } from '../about/about';
import { IMCCalculatorPage } from '../i-mccalculator/i-mccalculator';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = IACCalculatorPage;
  tab2Root: any = AboutPage;
  tab3Root: any = IMCCalculatorPage;
  constructor(public navCtrl: NavController) {
  }
  
}
