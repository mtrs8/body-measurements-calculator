import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { iaccalculator } from '../i-accalculator';
import { imccalculator } from '../i-mccalculator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = iaccalculator;
  tab2Root = AboutPage;
  tab3Root = imccalculator;

  constructor() {

  }
}
