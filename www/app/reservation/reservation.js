import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/reservation/reservation.html',
})
export class ReservationPage {
  constructor() {
    this.reservation = {
      checkin: new Date(),
      checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      room: 156,
      rate: 121,
      wifi: 'resortwifi'
    };
  }
}
