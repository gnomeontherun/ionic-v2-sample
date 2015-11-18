import {Http} from 'angular2/http';
import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/weather/weather.html',
})
export class WeatherPage {
  constructor(http: Http) {
    this.directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

    http
      .get('https://ionic-in-action-api.herokuapp.com/weather')
      .map(res => res.json())
      .subscribe(weather => this.weather = weather);
  }

  getDirection(degree) {
    if (degree > 338) {
      degree = 360 - degree;
    }
    var index = Math.floor((degree + 22) / 45);
    return this.directions[index];
  }
}
