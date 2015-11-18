import {Http} from 'angular2/http';
import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/restaurants/restaurants.html'
})
export class RestaurantsPage {
  constructor(http: Http) {
    this.page = 0;
    this.total = 1;
    this.http = http;
    this.results = {
      restaurants: []
    };

    this.getRestaurants();
  })

  getRestaurants() {
    this.page++;
    this.http
      .get('https://ionic-in-action-api.herokuapp.com/restaurants?page=' + this.page)
      .map(res => res.json())
      .subscribe(results => {
        this.results.currentPage = results.currentPage;
        results.restaurants.forEach(restaurant => {
          this.results.restaurants.push(restaurant);
        });
      });
  }
}
