import {Page, NavController} from 'ionic/ionic';
import {RestaurantsPage} from '../restaurants/restaurants';
import {ReservationPage} from '../reservation/reservation';
import {WeatherPage} from '../weather/weather';

@Page({
  templateUrl: 'app/home/home.html',
})
export class HomePage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  goToReservation() {
    this.nav.push(ReservationPage);
  }

  goToWeather() {
    this.nav.push(WeatherPage);
  }

  goToRestaurants() {
    this.nav.push(RestaurantsPage);
  }
}
