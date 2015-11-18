import {App, Platform, StatusBar} from 'ionic/ionic';
import {TourPage} from './tour/tour';

@App({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class AppRoot {
  constructor(platform: Platform) {
    this.platform = platform;
    this.root = TourPage;

    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
