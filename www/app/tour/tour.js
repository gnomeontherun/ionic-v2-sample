import {Page, NavController, ViewController} from 'ionic/ionic';
import {HomePage} from '../home/home';

@Page({
  templateUrl: 'app/tour/tour.html',
})
export class TourPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  goHome() {
    this.nav.push(HomePage);
  }

  onPageDidLeave() {
    this.nav.setRoot(HomePage);
  }
}
